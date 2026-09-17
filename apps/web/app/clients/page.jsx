import CardsPage from '../_components/CardsPage';

export const metadata = {
    title: 'Clients | HIREWAY'
};

export default function ClientsPage() {
    return (
        <CardsPage
            eyebrow="Client ecosystem"
            heading="Built to support enterprise technology organizations."
            intro="Our operating model is designed for complex client ecosystems and high-volume, high-accountability technology programs."
            cards={[
                [
                    'D',
                    'Deloitte',
                    'Enterprise consulting and technology programs.'
                ],
                [
                    'T',
                    'TCS',
                    'Technology delivery and specialist workforce requirements.'
                ],
                [
                    'H',
                    'HCLTech',
                    'Platform, infrastructure and enterprise transformation.'
                ],
                [
                    'I',
                    'Infosys',
                    'Technology consulting and digital delivery.'
                ],
                [
                    'K',
                    'KPMG',
                    'Consulting, transformation and platform initiatives.'
                ],
                [
                    'N',
                    'NTT',
                    'Enterprise technology and specialist capability needs.'
                ]
            ]}
        />
    );
}
