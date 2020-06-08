import ImageList from './imagesData'
// import HERO_IMAGE from '../images/Services_Page/WHAT_WE_DO.png'
// import UX_UI_icon from '../images/Services_Page/UX_UI.png'
// import Development_icon from '../images/Services_Page/Development.png'
// import Deployment_icon from '../images/Services_Page/Deployment.png'
// import LET_US_HELP from '../images/Services_Page/LET_US_HELP.png'


const { HERO_IMAGE, UX_UI_icon, Development_icon, Deployment_icon, LET_US_HELP, Consulting_fill, Consulting_outline, Design_and_Build_fill, Design_and_Build_outline, digital_marketing_fill, digital_marketing_outline, suppport_fill, suppport_outline, SOCIAL_MEDIA, SEO, DIGITAL, DEPLOYMENT_INTEGRATION, DESIGN_DEVELOPMENT, BUSSINESS_MODELING_SUPPORT, DESIGN_STRATEGY, DESIGN_INNOVATION, PRODUCT_DESIGN } = ImageList.SERVICES_PAGE_IMAGES
export default {
    HERO_DATA: {
        HERO_HEADING: 'This is what we do',
        HERO_SUBHEADING: "As experts in the industry, we approach clients with empathy to achieve the best solutions for their complex problems. Our practice starts with Business & Digital Strategy, Experience Design and Managed Services to help our client’s customers & user experience.",
        PARAGRAPH: "We make sure to stay with you every step of the way!",
        HERO_IMAGE: HERO_IMAGE
    },
    SERVICE_LIST: {
        TAB_LIST: [
            {
                label: 'CONSULTING',
                mobileLabel: 'Consulting',
                image: Consulting_outline,
                image_active: Consulting_fill,
                Description: 'Solving complex business problems never been easy. Loonum ‘Eclipse’ framework helps you kick-start your projects by engaging key stakeholders to collaborate towards key initiatives. We have been successful in delivering beyond expected outcomes.',
                CARDS: [
                    {
                        logo: DESIGN_STRATEGY,
                        name: 'Business Design & Strategy',
                        text: "We will help you simplify the business case and scope by utilising human-centered design methodologies to support the transformation and align mindset shift with collaborating as a group."
                    },
                    {
                        logo: DESIGN_INNOVATION,
                        name: 'Service Design & Innovation',
                        text: "All products and services have many touchpoints across many channels. We discover the current state of interaction from customers through to internal process for innovation. You’ll have the future state ready to grow."
                    },
                    {
                        logo: PRODUCT_DESIGN,
                        name: 'UX & Product Development ',
                        text: "All things at Loonum made out of “User-Centric” methodologies. This leads us to focus on our product development process to deliver the right product/service to your customer."
                    }
                ]
            },
            {
                label: 'DESIGN & BUILD',
                mobileLabel: 'Design & Build',
                image: Design_and_Build_outline,
                image_active: Design_and_Build_fill,
                Description: 'We have expertise across all phases of the product development lifecycle and can work with you to deliver part or all of the solution. Design & Build is about creating detailed design and executing the development, systems integration and testing.',
                CARDS: [
                    {
                        logo: UX_UI_icon,
                        name: 'UX & UI Design',
                        text: "User Experience design is the fundamental ground work practice for any digital product. It will tell the right story for User Interface designer, your customers are looking for."
                    },
                    {
                        logo: Development_icon,
                        name: 'Development',
                        text: "Whether it's a simple professional service, coffee shop, restaurant, salon, or an e-commerce website, we can develop what your customers see through to backend where everything generates."
                    },
                    {
                        logo: Deployment_icon,
                        name: 'Deployment',
                        text: "Loonum always makes sure to deliver what we build with our clients, so they can make ends meet for what they spend. Even if the need is to deploy already been built product elsewhere, we will deploy."
                    }
                ]
            },
            {
                label: 'DIGITAL MARKETING',
                mobileLabel: 'Digital marketing',
                image: digital_marketing_outline,
                image_active: digital_marketing_fill,
                Description: 'Loonum takes a more relevant online marketing approach for our clients. We make sure targeted campaigns have a conversion rate that will give a successful ROI. Since it’s a competitive stream, we have simplified to engage in stages.',
                CARDS: [
                    {
                        logo: DIGITAL,
                        name: 'Digital Strategy',
                        text: "Within a rapidly changing digital landscape, we help clients to simplify their digital process and value proposition by validating business model focusing on their demanding users."
                    },
                    {
                        logo: SEO,
                        name: 'SEO',
                        text: "We take a careful approach in selecting the right keywords not only for your website but for an end to end online digital presence. We always align with you and your customers."
                    },
                    {
                        logo: SOCIAL_MEDIA,
                        name: 'Social Media',
                        text: "Our social media experts don’t spray and pray for conversions. We curate whom your customer segment is and preferred channel, so we target it for proper, sustainable growth."
                    }
                ]
            },
             {
                label: 'SUPPORT',
                mobileLabel: 'Support',
                image: suppport_outline,
                image_active: suppport_fill,
                Description: 'Loonum has an extensive support service after completion of any project on any size. We value our after-sales customer engagement as much as per to the beginning. The principle is loyalty and reward we get from our clients and their customers.',
                CARDS: [
                    {
                        logo: BUSSINESS_MODELING_SUPPORT,
                        name: 'Business Strategy',
                        text: "We vowed to stay with our clients every step of the way, and whenever complexity arises. From simple business decisions to complex model changes, we are always at your service."
                    },
                    {
                        logo: DESIGN_DEVELOPMENT,
                        name: 'Design & Development',
                        text: "Design & development always have challenges. Loonum support services create simple guidelines as well as personal engagement for any challenge our clients face."
                    },
                    {
                        logo: DEPLOYMENT_INTEGRATION,
                        name: 'Deployment & Integration',
                        text: "Digital transformation and integration is a complex journey. We do not expect our clients to troubleshoot technical challenges. We engage in every step of the way with a 24/7 support system."
                    }
                ]
            }],

    },
    NEW_WAY_WORKING_DATA: {
        heading: 'Let us help you to simplify your business challenges so you can serve your customers and increase revenue',
        image: LET_US_HELP,
        description: "At Loonum, we do not believe your world revolves around digital. We believe in business model generation with a niche value proposition towards your customers. In a compressed timeframe, we understand your business model, define and validate with you, and see where it needs a digital output. That’s where we believe in our value."

    }

}