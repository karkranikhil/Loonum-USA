import ImageList from './imagesData'
// import HERO_IMAGE from '../images/Services_Page/WHAT_WE_DO.png'
// import UX_UI_icon from '../images/Services_Page/UX_UI.png'
// import Development_icon from '../images/Services_Page/Development.png'
// import Deployment_icon from '../images/Services_Page/Deployment.png'
// import LET_US_HELP from '../images/Services_Page/LET_US_HELP.png'


const { HERO_IMAGE, UX_UI_icon, Development_icon, Deployment_icon, LET_US_HELP, Consulting_fill, Consulting_outline, Design_and_Build_fill, Design_and_Build_outline, digital_marketing_fill, digital_marketing_outline, suppport_fill, suppport_outline, SOCIAL_MEDIA, SEO, DIGITAL, DEPLOYMENT_INTEGRATION, DESIGN_DEVELOPMENT, BUSSINESS_MODELING_SUPPORT, DESIGN_STRATEGY, DESIGN_INNOVATION, PRODUCT_DESIGN } = ImageList.SERVICES_PAGE_IMAGES
export default {
    HERO_DATA: {
        HERO_HEADING: 'THIS IS LOONUM',
        HERO_SUBHEADING: "We are experts in the industry. Our clients are treated as individuals and we work with you to understand your core beliefs and potential growth structures. Following a four step approach: Business & Digital Strategy, Experience Design and Managed Services, we are able to help with your customer and user experience.",
        PARAGRAPH: "We will stay with you for every step of the journey!",
        HERO_IMAGE: HERO_IMAGE
    },
    SERVICE_LIST: {
        TAB_LIST: [
            {
                label: 'CONSULTING',
                mobileLabel: 'Consulting',
                image: Consulting_outline,
                image_active: Consulting_fill,
                Description: 'The Loonum Eclipse framework will kickstart your projects and engage your stakeholders, increasing collaboration on key initiatives. Our successes are your tools; our core goals are to always deliver beyond expectations.',
                CARDS: [
                    {
                        logo: DESIGN_STRATEGY,
                        name: 'Business Design & Strategy',
                        text: "By simplifying your business goals and scope, resulting in a focus on your core methods, we can offer a strategic design that is customer centric. This creates a mindset shift of your values and increases collaboration."
                    },
                    {
                        logo: DESIGN_INNOVATION,
                        name: 'Service Design & Innovation',
                        text: "Through examination of your current service systems, we’ll examine and suggest areas for improvement adding to the interactivity of your internal processes. Our design strategy includes room for future growth and development."
                    },
                    {
                        logo: PRODUCT_DESIGN,
                        name: 'UX & Product Development ',
                        text: "Understanding the needs of your customer and how they use your product, often known as a ‘user experience’ (UX), can aid in changing the way you do business and how your product should be developed."
                    }
                ]
            },
            {
                label: 'DESIGN & BUILD',
                mobileLabel: 'Design & Build',
                image: Design_and_Build_outline,
                image_active: Design_and_Build_fill,
                Description: 'We will create a detailed design and execute the development, systems integration, and testing. Loonum has the expertise needed for all the phases of  the product development lifecycle.',
                CARDS: [
                    {
                        logo: UX_UI_icon,
                        name: 'UX & UI Design',
                        text: "User experience (UX) design is the fundamental work for all digital products. It tells us how to design products for your customers, which relates to the correct build of the user interface (UI) design framework."
                    },
                    {
                        logo: Development_icon,
                        name: 'Development',
                        text: "Often the best ideas are found through development strategies. No matter what your company sells or the services it offers, we can create e-commerce solutions that are targeted to increase growth."
                    },
                    {
                        logo: Deployment_icon,
                        name: 'Deployment',
                        text: "Loonum is here for the long haul, we’ll guide you through the deployment stage to make sure all the engine of your new platform is purring like the proverbial kitten. Even if your solution was developed elsewhere, we can help!"
                    }
                ]
            },
            {
                label: 'DIGITAL MARKETING',
                mobileLabel: 'Digital marketing',
                image: digital_marketing_outline,
                image_active: digital_marketing_fill,
                Description: 'Loonum takes a more relevant online marketing approach for our clients. We make sure targeted campaigns have a conversion rate that will give a successful return on your investment. Since it’s a competitive stream, we have simplified processes to engage in stages.',
                CARDS: [
                    {
                        logo: DIGITAL,
                        name: 'Digital Strategy',
                        text: "Within a rapidly changing digital landscape, Loonum will help clients to simplify their digital process and value proposition. We’ll validate your business model and put the focus on your users."
                    },
                    {
                        logo: SEO,
                        name: 'SEO',
                        text: "Searching and selecting the right keywords is vital for search engine optimisation (SEO). We are careful in our approach and look for the right words to connect you with your customers."
                    },
                    {
                        logo: SOCIAL_MEDIA,
                        name: 'Social Media',
                        text: "By following the Loonum social media principles we can curate and develop plans that are targeted towards attraction and conversion. By using social media to generate growth we will gain results."
                    }
                ]
            },
             {
                label: 'SUPPORT',
                mobileLabel: 'Support',
                image: suppport_outline,
                image_active: suppport_fill,
                 Description: 'Loonum provides customer support well beyond the life of our contracts. We value our clients through their entire digital journey. We thrive on finding solutions to problems, and often our reward is seeing our clients successes.',
                CARDS: [
                    {
                        logo: BUSSINESS_MODELING_SUPPORT,
                        name: 'Business Strategy',
                        text: "We will work with our clients during every phase of a project, we’ll keep you updated and are there whenever you need changes, be it simple or complex. Our service is second to none!"
                    },
                    {
                        logo: DESIGN_DEVELOPMENT,
                        name: 'Design & Development',
                        text: "At Loonum we understand that the design and development stages have a certain set of challenges. That’s why we’ve developed our service strategy to work with you during this process."
                    },
                    {
                        logo: DEPLOYMENT_INTEGRATION,
                        name: 'Deployment & Integration',
                        text: "Digital transformation and integration is a complex journey. We do not expect our clients to troubleshoot technical challenges. At Loonum we offer 24/7 support services for all of our clients."
                    }
                ]
            }],

    },
    NEW_WAY_WORKING_DATA: {
        heading: 'LET US HELP YOU TO SIMPLIFY YOUR BUSINESS CHALLENGES',
        image: LET_US_HELP,
        description1: "At Loonum we know that the digital world is only a part of your business. It is the tool that allows you to foster relationships with your customers and build on existing brand profiles.",
        description2: "Allow us to be your guide to the ideologies of the operating in the digital realm. We can show you new and exciting ways of developing your business and prepare it for the future and beyond!"

    }

}