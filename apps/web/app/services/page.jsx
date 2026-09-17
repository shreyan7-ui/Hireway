import CardsPage from '../_components/CardsPage';

export const metadata = {
    title: 'Services | HIREWAY'
};

export default function ServicesPage() {
    return (
        <CardsPage
            eyebrow="Capabilities"
            heading="You define the requirement. We deliver the expertise"
            intro={
                <>
                    <div className="service-intro-item">
                        <strong>IT Resource Augmentation</strong>
                        <span>Skilled professionals to strengthen your existing teams and support ongoing projects.</span>
                    </div>
                    <div className="service-intro-item">
                        <strong>Specialized IT Talent</strong>
                        <span>Professionals across ServiceNow, Cloud, Data, DevOps, Software Development, Testing, Cybersecurity and other technology areas.</span>
                    </div>
                    <div className="service-intro-item">
                        <strong>Requirement-Based Talent Solutions</strong>
                        <span>Profiles matched according to your required skill set, experience, location, availability and project requirements.</span>
                    </div>
                    <div className="service-intro-item">
                        <strong>Pan-India Resource Support</strong>
                        <span>Access to qualified professionals across India for remote, hybrid and location-specific requirements.</span>
                    </div>
                    <div className="service-intro-item">
                        <strong>Project-Based Staffing</strong>
                        <span>Helping organizations quickly scale their teams for short-term or long-term project requirements.</span>
                    </div>
                    <div className="service-intro-item">
                        <strong>C2H, FTE &amp; C2C Staffing</strong>
                        <span>Flexible engagement models designed to support changing business and project demands.</span>
                    </div>
                    <div className="service-intro-item">
                        <strong>Quick Profile Delivery</strong>
                        <span>Faster access to relevant and available professionals for urgent requirements.</span>
                    </div>
                    <div className="service-intro-item">
                        <strong>Quality Profile Screening</strong>
                        <span>Focused on delivering relevant, verified and requirement-aligned profiles instead of unnecessary bulk submissions.</span>
                    </div>
                    <div className="service-intro-item">
                        <strong>Permanent Hiring</strong>
                        <span>Support in identifying professionals for long-term organizational requirements.</span>
                    </div>
                    <div className="service-intro-item">
                        <strong>Workforce Scaling</strong>
                        <span>Helping organizations scale their teams up or down based on business and project needs.</span>
                    </div>
                </>
            }
            cards={[
                [
                    'SN',
                    'ServiceNow',
                    'ITSM, ITOM, HRSD, ITAM, CMDB, CSM, SecOps, IRM/GRC and SPM.'
                ],
                [
                    'AI',
                    'AI & Automation',
                    'Now Assist, GenAI, workflow automation and intelligent service experiences.'
                ],
                [
                    'BA',
                    'Business Analysis',
                    'Discovery, process mapping, BRD/FRD, UAT and stakeholder alignment.'
                ],
                [
                    'DEV',
                    'Engineering',
                    'Developers, integrations, custom applications and platform engineering.'
                ],
                [
                    'QA',
                    'Quality Engineering',
                    'Functional, automation, performance and release validation.'
                ],
                [
                    'PM',
                    'Delivery Leadership',
                    'Project managers, architects and program specialists for transformation initiatives.'
                ]
            ]}
        />
    );
}
