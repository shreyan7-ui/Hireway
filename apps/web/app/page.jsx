import SiteChrome from './_components/SiteChrome';

export const metadata = {
    title: 'HIREWAY | Enterprise IT Services & Consulting'
};

export default function HomePage() {
    return (
        <SiteChrome>
            <header className="hero">
                <div className="wrap">
                    <div className="eyebrow reveal">
                        IT Services · Consulting · Workforce
                    </div>

                    <h1>
                        Enterprise technology teams, built for momentum.
                    </h1>

                    <p>
                        HIREWAY helps organizations scale critical technology
                        programs with high-quality professionals, consulting
                        expertise and flexible C2C, C2H and FTE engagement models.
                    </p>

                    <div className="actions reveal">
                        <a className="btn primary" href="/contact">
                            Request professionals <span>↗</span>
                        </a>

                        <a className="btn secondary" href="/services">
                            Explore services
                        </a>
                    </div>

                    <div className="stats">
                        <div className="stat tilt reveal">
                            <b>150+</b>
                            <span>Technology professionals</span>
                        </div>

                        <div className="stat tilt reveal">
                            <b>25+</b>
                            <span>Technology capabilities</span>
                        </div>

                        <div className="stat tilt reveal">
                            <b>3</b>
                            <span>Engagement models</span>
                        </div>

                        <div className="stat tilt reveal">
                            <b>24–72h</b>
                            <span>Typical profile turnaround</span>
                        </div>
                    </div>
                </div>
            </header>

            <section className="parallax-band">
                <div className="marquee">
                    STAFF · SCALE · DELIVER · SUPPORT · STAFF · SCALE · DELIVER · SUPPORT ·
                </div>
            </section>

            <section>
                <div className="wrap">
                    <div className="head reveal">
                        <div className="eyebrow">
                            Why HIREWAY
                        </div>

                        <h2>
                            A delivery partner, not just a staffing vendor.
                        </h2>

                        <p>
                            We combine talent access, platform expertise and
                            operational discipline to help enterprise teams move
                            from requirement to productive delivery.
                        </p>
                    </div>

                    <div className="grid3">
                        <div className="card tilt reveal">
                            <div className="icon">01</div>

                            <h3>
                                Specialist talent
                            </h3>

                            <p>
                                Vetted architects, developers, BAs, testers, PMs
                                and platform specialists aligned to real requirements.
                            </p>
                        </div>

                        <div className="card tilt reveal">
                            <div className="icon">02</div>

                            <h3>
                                Flexible engagement
                            </h3>

                            <p>
                                C2C, C2H and FTE models designed around project
                                duration, risk and long-term workforce strategy.
                            </p>
                        </div>

                        <div className="card tilt reveal">
                            <div className="icon">03</div>

                            <h3>
                                Enterprise process
                            </h3>

                            <p>
                                Structured screening, documentation, onboarding
                                and resource lifecycle coordination.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dark">
                <div className="wrap">
                    <div className="head reveal">
                        <div className="eyebrow">
                            Engagement models
                        </div>

                        <h2>
                            One partner. Three ways to scale.
                        </h2>

                        <p>
                            Choose the model that fits your risk, timeline and
                            workforce strategy.
                        </p>
                    </div>

                    <div className="models">
                        <div className="model tilt reveal">
                            <strong>
                                C2C
                            </strong>

                            <h3>
                                Contract to Contract
                            </h3>

                            <p>
                                Flexible specialists for project-based or ongoing
                                requirements.
                            </p>
                        </div>

                        <div className="model tilt reveal">
                            <strong>
                                C2H
                            </strong>

                            <h3>
                                Contract to Hire
                            </h3>

                            <p>
                                Evaluate talent in a contract engagement before
                                long-term conversion.
                            </p>
                        </div>

                        <div className="model tilt reveal">
                            <strong>
                                FTE
                            </strong>

                            <h3>
                                Full-Time Employee
                            </h3>

                            <p>
                                Permanent technology hiring for critical roles and teams.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrap">
                    <div className="banner tilt reveal">
                        <div className="eyebrow">
                            Client resource desk
                        </div>

                        <h2>
                            Already hired a resource? Get support without chasing a mailbox.
                        </h2>

                        <p>
                            Raise a delivery, replacement, onboarding, availability,
                            billing or contract request from one dedicated company-facing desk.
                        </p>

                        <a
                            className="btn"
                            style={{
                                background: 'white',
                                color: '#07111f'
                            }}
                            href="/resource-request"
                        >
                            Open Resource Desk ↗
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrap">
                    <div className="banner tilt reveal">
                        <div className="eyebrow">
                            Ready to scale?
                        </div>

                        <h2>
                            Tell us what you need. We&rsquo;ll bring the right people.
                        </h2>

                        <p>
                            Share the technology, experience, location, engagement
                            model and timeline. Our team will route the requirement
                            to the right delivery specialists.
                        </p>

                        <a
                            className="btn"
                            style={{
                                background: 'white',
                                color: '#07111f'
                            }}
                            href="/contact"
                        >
                            Start a requirement ↗
                        </a>
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
}
