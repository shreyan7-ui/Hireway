import SiteChrome from '../_components/SiteChrome';
import LeadForm from '../_components/LeadForm';

export const metadata = {
    title: 'Contact | HIREWAY'
};

export default function ContactPage() {
    return (
        <SiteChrome>
            <section className="hero">
                <div className="wrap">
                    <div className="eyebrow reveal">
                        Contact
                    </div>

                    <h1>
                        Let&rsquo;s build your next technology team.
                    </h1>

                    <p>
                        Send a requirement and our team will connect with you.
                    </p>
                </div>
            </section>

            <section>
                <div className="wrap">
                    <div className="contactgrid">
                        <div className="copy">
                            <div className="eyebrow reveal">
                                Requirement desk
                            </div>

                            <h2 className="reveal">
                                Tell us what you need.
                            </h2>

                            <p className="reveal">
                                Useful details include technology, experience,
                                location, engagement model and target start date.
                            </p>

                            <div className="card tilt reveal">
                                <h3>
                                    Engagement models
                                </h3>

                                <p>
                                    <b>C2C</b> · Contract to Contract
                                    <br />
                                    <b>C2H</b> · Contract to Hire
                                    <br />
                                    <b>FTE</b> · Full-Time Employee
                                </p>
                            </div>
                        </div>

                        <LeadForm />
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
}
