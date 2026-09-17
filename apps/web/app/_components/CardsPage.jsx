import SiteChrome from './SiteChrome';

export default function CardsPage({
    eyebrow,
    heading,
    intro,
    cards
}) {
    return (
        <SiteChrome>
            <section className="hero">
                <div className="wrap">
                    <div className="eyebrow reveal">
                        {eyebrow}
                    </div>

                    <h1>
                        {heading}
                    </h1>

                    <p>
                        {intro}
                    </p>
                </div>
            </section>

            <section>
                <div className="wrap">
                    <div className="grid3">
                        {cards.map(([icon, title, body]) => (
                            <div
                                className="card tilt reveal"
                                key={title}
                            >
                                <div className="icon">
                                    {icon}
                                </div>

                                <h3>
                                    {title}
                                </h3>

                                <p>
                                    {body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="dark">
                <div className="wrap">
                    <div className="banner tilt reveal">
                        <div className="eyebrow">
                            Engage us
                        </div>

                        <h2>
                            Need specialists for a live requirement?
                        </h2>

                        <p>
                            Choose C2C, C2H or FTE and let our team build a focused shortlist.
                        </p>

                        <a
                            className="btn"
                            style={{
                                background: 'white',
                                color: '#07111f'
                            }}
                            href="/contact"
                        >
                            Talk to us →
                        </a>
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
}
