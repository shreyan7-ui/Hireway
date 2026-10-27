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

                    <div className="service-intro">
                        {intro}
                    </div>
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

        </SiteChrome>
    );
}
