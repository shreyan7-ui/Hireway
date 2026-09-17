import SiteChrome from '../_components/SiteChrome';
import JobsList from '../_components/JobsList';

export const metadata = {
    title: 'Careers | HIREWAY'
};

export default function CareersPage() {
    return (
        <SiteChrome>
            <section className="hero">
                <div className="wrap">
                    <div className="eyebrow reveal">
                        Careers
                    </div>

                    <h1>
                        Build the teams shaping tomorrow.
                    </h1>

                    <p>
                        Join a company working at the intersection of enterprise
                        technology, consulting and people.
                    </p>
                </div>
            </section>

            <section>
                <div className="wrap">
                    <div className="head reveal">
                        <h2>
                            Open opportunities
                        </h2>

                        <p>
                            Current roles from our delivery organization.
                        </p>
                    </div>

                    <JobsList />
                </div>
            </section>
        </SiteChrome>
    );
}
