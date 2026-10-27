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
                        <strong>Social Media Management</strong>
                        <span>End-to-end management across Instagram, YouTube, 
                            Facebook, and LinkedIn covering content creation, 
                            scheduling, community engagement,and monthly performance
                            analytics.</span>
                    </div>
                    <div className="service-intro-item">
                        <strong>Video Editing & Content Production</strong>
                        <span>Complete video production and editing—covering Reels,
                             long-form YouTube content, promotional brand films, 
                             podcasts, motion graphics, and AI-assisted production.</span>
                    </div>
                    <div className="service-intro-item">
                        <strong>Hotel, Restaurant & Café Marketing</strong>
                        <span>End-to-end hotel, restaurant, and café marketing
                            covering food, menu, and ambience photography, 
                            dish-focused Reels, local SEO, influencer campaigns,
                            and booking lead generation.</span>
                    </div>
                    <div className="service-intro-item">
                        <strong>Product Marketing & Brand Promotion</strong>
                        <span>End-to-end product marketing across tech, food,
                            and beauty brands—covering commercial photography,
                            brand storytelling, influencer-led launches, 
                            and e-commerce marketplace support.</span>
                    </div>
                    <div className="service-intro-item">
                        <strong>Sales & Business Development on Contract</strong>
                        <span>Dedicated outsourced sales and business development—covering
                            targeted B2B lead generation, appointment setting, distributor
                            and channel partner acquisition, and complete pipeline management.</span>
                    </div>
                    {/* <div className="service-intro-item">
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
                    </div> */}
                </>
            }
            cards={[
                [
                    'HSPTY',
                    'Hospitality',
                    'Luxury hotels, resorts, boutique properties, restaurants, cafés, cloud kitchens and wedding venues..'
                ],
                [
                    'FMCG',
                    'FMCG, Dairy & Food Brands',
                    'Dairy products, ghee, honey, packaged foods, organic products and regional specialties.'
                ],
                [
                    'IT Tech',
                    'IT & Technology',
                    'SaaS companies, IT service providers, software startups and technology product businesses.'
                ],
                [
                    'BL',
                    'Beauty & Lifestyle',
                    'Cosmetics, skincare, makeup, salons, fashion and wellness brands.'
                ],
                // [
                //     'QA',
                //     'Quality Engineering',
                //     'Functional, automation, performance and release validation.'
                // ]
            ]}
        />
    );
}
