import CardsPage from '../_components/CardsPage';

export const metadata = {
    title: 'About | HIREWAY'
};

export default function AboutPage() {
    return (
        <CardsPage
            eyebrow="About us"
            heading="We connect business ambition with technology execution."
            intro="HIREWAY is an IT services, consulting and workforce solutions company built around one simple idea: enterprise teams should be able to access the right expertise without unnecessary friction."
            cards={[
                [
                    '01',
                    'Quality first',
                    'We prioritize capability, relevance and professional readiness over volume.'
                ],
                [
                    '02',
                    'Client aligned',
                    'We work within enterprise procurement, MSP and vendor-management ecosystems.'
                ],
                [
                    '03',
                    'Long-term thinking',
                    'We support the full resource lifecycle from requirement through onboarding and delivery.'
                ]
            ]}
        />
    );
}
