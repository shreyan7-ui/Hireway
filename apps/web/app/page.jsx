import SiteChrome from './_components/SiteChrome';
import ContactUsForm from './_components/ContactUsForm';

export const metadata = {
    title: 'HIREWAY | Enterprise IT Services & Consulting'
};

export default function HomePage() {
    return (
        <SiteChrome>
            <header className="hero">
                <div className="hero-logo-watermark" aria-hidden="true">
                    <img
                        src="/assets/logo.png"
                        alt=""
                    />
                </div>

                <div className="wrap">
                    <div className="eyebrow reveal">
                        Digital Marketing Agency
                    </div>

                    <h1>
                        Hireway — Digital Marketing & Business Growth
                    </h1>

                    <div className="hero-copy">
                        <p>
                            Hireway is an integrated digital marketing and commercial growth
                            partner built for hospitality, technology, and consumer brands.
                        </p>

                        <p>
                            Create: Studio-grade Reels, brand films, and commercial photography
                            that establish immediate market authority.
                        </p>

                        <p>
                            Amplify: Strategic social media management, local SEO, and targeted
                            influencer campaigns engineered to expand market reach.
                        </p>

                        <p>
                            Convert: Dedicated B2B sales outreach, channel distributor
                            acquisition, and direct booking engines that turn visibility into
                            closed revenue.
                        </p>

                        <div className="card tilt reveal digital-marketing-card">
                            <h3>
                                Digital Marketing
                            </h3>
                        </div>

                        <ul className="hero-points">
                            <li>
                                <strong>Social Media Marketing</strong> - Build and manage your
                                brand presence across LinkedIn, Instagram, Facebook and other
                                platforms.
                            </li>

                            <li>
                                <strong>LinkedIn Marketing</strong> - B2B outreach, professional
                                branding, lead generation and audience engagement.
                            </li>

                            <li>
                                <strong>Content Marketing</strong> - Create engaging blogs, posts,
                                articles and business content.
                            </li>

                            <li>
                                <strong>Search Engine Optimization (SEO)</strong> - Improve online
                                visibility and organic search presence.
                            </li>

                            <li>
                                <strong>Performance Marketing</strong> - Paid campaigns focused on
                                leads, traffic and conversions.
                            </li>

                            <li>
                                <strong>Lead Generation</strong> - Identify and attract potential
                                clients through targeted digital campaigns.
                            </li>

                            <li>
                                <strong>Employer Branding</strong> - Strengthen your company&apos;s
                                online presence to attract both clients and talent.
                            </li>

                            <li>
                                <strong>Email Marketing</strong> - Targeted campaigns for client
                                engagement, promotions and business communication.
                            </li>

                            <li>
                                <strong>Brand & Online Presence Management</strong> - Maintain a
                                consistent and professional digital identity
                            </li>
                        </ul>
                    </div>

                    <div className="actions reveal">
                        {/* <a className="btn primary" href="/contact">
                            Request professionals <span>↗</span>
                        </a> */}

                        <a className="btn secondary" href="/services">
                            Explore services
                        </a>
                    </div>

                </div>
            </header>

            <section className="parallax-band">
                <div className="marquee">
                    STAFF · SCALE · DELIVER · SUPPORT · STAFF · SCALE · DELIVER · SUPPORT ·
                </div>
            </section>

            {/* <div className="wrap">
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
                </div> */}

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
                                MR
                            </strong>

                            <h3>
                                Monthly Retainers:
                            </h3>

                            <p>
                               Continuous social media management, 
                               regular video/content production, 
                               local SEO, and brand growth.
                            </p>
                        </div>

                        <div className="model tilt reveal">
                            <strong>
                                PBS
                            </strong>

                            <h3>
                                Project-Based Sprints:
                            </h3>

                            <p>
                                Fixed-scope execution for product launches,
                                brand films, commercial photography, 
                                and seasonal campaigns.
                            </p>
                        </div>

                        <div className="model tilt reveal">
                            <strong>
                                DOT
                            </strong>

                            <h3>
                                Dedicated Outsourced Teams:
                            </h3>

                            <p>
                               Contract-based commercial teams driving 
                               targeted B2B lead generation, appointment setting,
                                and channel distribution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
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
            </section> */}

            {/* <div className="wrap">
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
                </div> */}

            <section>
                <div className="wrap">
                    <div className="contactgrid">
                        <div className="copy">
                            <div className="eyebrow reveal">
                                Contact us
                            </div>

                            <h2 className="reveal">
                                Let&rsquo;s connect.
                            </h2>

                            {/* <p className="reveal">
                                Share your name and email ID. Our team will contact
                                you using the phone or WhatsApp number below.
                            </p> */}
                        </div>

                        <ContactUsForm />
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
}
