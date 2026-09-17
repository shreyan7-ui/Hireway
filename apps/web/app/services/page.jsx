import CardsPage from '../_components/CardsPage';

export const metadata = {
    title: 'Services | HIREWAY'
};

export default function ServicesPage() {
    return (
        <CardsPage
            eyebrow="Capabilities"
            heading="Technology expertise for complex programs."
            intro="From ServiceNow platforms to enterprise delivery teams, we bring specialist capability around your business requirements."
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
