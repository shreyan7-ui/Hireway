'use client';

import { useEffect } from 'react';

export default function SiteChrome({ children }) {
    useEffect(() => {
        const elements = document.querySelectorAll('.reveal');

        let observer;

        if ('IntersectionObserver' in window) {
            observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.12
                }
            );

            elements.forEach(element => {
                observer.observe(element);
            });
        } else {
            elements.forEach(element => {
                element.classList.add('visible');
            });
        }

        const tiltElements = document.querySelectorAll('.tilt');

        const moveHandlers = new Map();
        const leaveHandlers = new Map();

        tiltElements.forEach(element => {
            const move = event => {
                const rect = element.getBoundingClientRect();
                const px = (event.clientX - rect.left) / rect.width - 0.5;
                const py = (event.clientY - rect.top) / rect.height - 0.5;

                element.style.transform = `
                    perspective(900px)
                    rotateX(${py * -5}deg)
                    rotateY(${px * 7}deg)
                    translateY(-5px)
                `;
            };

            const leave = () => {
                element.style.transform = '';
            };

            moveHandlers.set(element, move);
            leaveHandlers.set(element, leave);

            element.addEventListener('pointermove', move);
            element.addEventListener('pointerleave', leave);
        });

        const hero = document.querySelector('.hero');
        let layer;
        let heroMove;
        let heroLeave;

        if (hero && !hero.querySelector('.float-layer')) {
            layer = document.createElement('div');
            layer.className = 'float-layer';

            layer.innerHTML = `
                <span class="orb orb-a" data-float=".025"></span>
                <span class="orb orb-b" data-float=".055"></span>
                <span class="cube cube-a" data-float=".04">EB</span>
                <span class="ring ring-a" data-float=".07"></span>
                <span class="dot-grid" data-float=".03"></span>
                <span class="mini-cube mini-cube-a" data-float=".035">&lt;/&gt;</span>
                <span class="mini-cube mini-cube-b" data-float=".05">AI</span>
                <span class="float-pill pill-a" data-float=".025">CLOUD</span>
                <span class="float-pill pill-b" data-float=".045">DATA</span>
                <span class="node node-a" data-float=".06"></span>
                <span class="node node-b" data-float=".035"></span>
                <span class="node-line line-a"></span>
                <span class="node-line line-b"></span>
            `;

            hero.appendChild(layer);

            heroMove = event => {
                const rect = hero.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;

                layer.style.transform = `
                    translate3d(
                        ${x * 22}px,
                        ${y * 18}px,
                        0
                    )
                `;
            };

            heroLeave = () => {
                layer.style.transform = '';
            };

            hero.addEventListener('pointermove', heroMove);
            hero.addEventListener('pointerleave', heroLeave);
        }

        let ticking = false;

        const updateScroll = () => {
            document.documentElement.style.setProperty(
                '--scrollY',
                `${window.scrollY}px`
            );

            document.querySelectorAll('.parallax').forEach(element => {
                const speed = Number(element.dataset.speed || 0.12);

                element.style.transform = `
                    translate3d(
                        0,
                        ${window.scrollY * speed * -1}px,
                        0
                    )
                `;
            });

            document.querySelectorAll('[data-float]').forEach(
                (element, index) => {
                    const speed = Number(element.dataset.float || 0.04);
                    const drift =
                        Math.sin(window.scrollY * 0.008 + index) * 10;
                    const rotation =
                        Math.sin(window.scrollY * 0.004 + index) * 2;

                    element.style.transform = `
                        translate3d(
                            ${drift}px,
                            ${window.scrollY * speed * -1}px,
                            0
                        )
                        rotate(${rotation}deg)
                    `;
                }
            );

            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateScroll);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, {
            passive: true
        });

        updateScroll();

        return () => {
            observer?.disconnect();

            tiltElements.forEach(element => {
                element.removeEventListener(
                    'pointermove',
                    moveHandlers.get(element)
                );
                element.removeEventListener(
                    'pointerleave',
                    leaveHandlers.get(element)
                );
            });

            if (hero && heroMove && heroLeave) {
                hero.removeEventListener('pointermove', heroMove);
                hero.removeEventListener('pointerleave', heroLeave);
            }

            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <>
            <nav className="nav">
                <div className="wrap navin">
                    <a className="brand" href="/">
                        <img
                            src="/assets/startup-logo.png"
                            alt="HIREWAY home"
                        />
                    </a>

                    <div className="links">
                        {/* <a href="/about">ABOUT</a> */}
                        <a href="/services">SERVICES</a>
                        {/* <a href="/clients">Clients</a> */}
                        {/* <a href="/careers">Careers</a> */}
                        <a href="/resource-request">RESOURCE DESK/REQUIREMENT</a>
                    </div>

                    <a className="navcta" href="/contact">
                        Talk to us
                    </a>
                </div>
            </nav>

            {children}

            <footer>
                <div className="wrap footerin">
                    <span>
                        © 2026 HIREWAY Technologies
                    </span>

                    <span>
                        IT Services · Consulting · Workforce Solutions
                    </span>
                </div>
            </footer>
        </>
    );
}
