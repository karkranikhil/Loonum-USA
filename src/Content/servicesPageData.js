import ImageList from './imagesData'
// import HERO_IMAGE from '../images/Services_Page/WHAT_WE_DO.png'
// import UX_UI_icon from '../images/Services_Page/UX_UI.png'
// import Development_icon from '../images/Services_Page/Development.png'
// import Deployment_icon from '../images/Services_Page/Deployment.png'
// import LET_US_HELP from '../images/Services_Page/LET_US_HELP.png'

import Consulting_fill from '../images/Tab_Icons/Consulting_fill.svg'
import Consulting_outline from '../images/Tab_Icons/Consulting_outline.svg'
import Design_and_Build_fill from '../images/Tab_Icons/Design_and_Build_fill.svg'
import Design_and_Build_outline from '../images/Tab_Icons/Design_and_Build_outline.svg'
import digital_marketing_fill from '../images/Tab_Icons/digital_marketing_fill.svg'
import digital_marketing_outline from '../images/Tab_Icons/digital_marketing_outline.svg'
import suppport_fill from '../images/Tab_Icons/suppport_fill.svg'
import suppport_outline from '../images/Tab_Icons/suppport_outline.svg'

const { HERO_IMAGE, UX_UI_icon, Development_icon, Deployment_icon, LET_US_HELP } = ImageList.SERVICES_PAGE_IMAGES

export default {
    HERO_DATA: {
        HERO_HEADING: 'This is what we do',
        HERO_SUBHEADING: "As experts in the industry we approach clients with empathy to achieve the best solutions for their complex problems. Our practice starts with Busniess & Digital Stratgey, Experience Design and Managed Services to help our client’s customer’s & user experience.",
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
                Description: 'Solving complex business problems never been easy. Loonum ‘Eclipse’ framework help you kick-start your projects by engaging key stakeholders collaborate towards key initiatives. We have been successful delivering beyond expected outcomes.',
                CARDS: [
                    {
                        logo: UX_UI_icon,
                        name: 'Business Design & Strategy',
                        text: "We will help you to simplify the business case & scope by utilising human-centred design methodologies to support the transformation and align mindset shift to collaborate as a group."
                    },
                    {
                        logo: Development_icon,
                        name: 'Service Design & Innovation',
                        text: "All products and services have many touch points across many channels. We discover current state of interaction from customers through to internal process for innovation. You’ll have the future state ready to grow."
                    },
                    {
                        logo: Deployment_icon,
                        name: 'UX & Product Development ',
                        text: "All things at Loonum made out of “User Centric” methodologies. This leads us to focus on our product development process to deliver the right product/service to your customer."
                    }
                ]
            },
            {
                label: 'DESIGN & BUILD',
                mobileLabel: 'Design & Build',
                image: Design_and_Build_outline,
                image_active: Design_and_Build_fill,
                Description: 'We have expertise across all phases of the product development lifecycle and can work with you to deliver part or all of the solution. Design & Build is all about creating a detailed design and executing on the development, systems integration and testing.',
                CARDS: [
                    {
                        logo: UX_UI_icon,
                        name: 'UX & UI Design',
                        text: "User Experience design is the fundamental ground work practice for any digital product. It will tell the right story for User Interface designer for your customers are looking for."
                    },
                    {
                        logo: Development_icon,
                        name: 'Development',
                        text: "Whether its a simple professional service, coffee shop, restaurant, salon or an e-commerce website, we can develop what your cutomers see through to backend where everything generates. "
                    },
                    {
                        logo: Deployment_icon,
                        name: 'Deployment',
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    }
                ]
            },
            {
                label: 'DIGITAL MARKETING',
                mobileLabel: 'Digital marketing',
                image: digital_marketing_outline,
                image_active: digital_marketing_fill,
                Description: 'Loonum takes a more relevant online marketing approach for our clients. We make sure targeted campaigns have a conversion rate will give a successful ROI. Since it’s a competitive stream, we have simplified to engage in stages',
                CARDS: [
                    {
                        logo: UX_UI_icon,
                        name: 'Digital Strategy',
                        text: "Within rapidly changing digital landscape, we help clients to simplify their digital process and value proposition by validating business model focusing on their demanding users. "
                    },
                    {
                        logo: Development_icon,
                        name: 'SEO',
                        text: "We take a careful approach in selecting the right key words not only for your website, but for end to end online digital presence.We always align with you and your customers. "
                    },
                    {
                        logo: Deployment_icon,
                        name: 'Social Media',
                        text: "Our social media experts don’t spray and pray for conversions. We curate who your customer segment are and preferred channel, so we target it for accurate sustainable growth."
                    }
                ]
            }, {
                label: 'SUPPORT',
                mobileLabel: 'Support',
                image: suppport_outline,
                image_active: suppport_fill,
                Description: 'Loonum has an extensive support service after completion of any project on any size. We value our after sales customer engagement as much as per to the beginning. The principle is loyalty and reward we get from our clients and their customers.',
                CARDS: [
                    {
                        logo: UX_UI_icon,
                        name: 'Business Strategy',
                        text: "We vowed to stay with our clients every step of the way and whenever complexity arises. From simple business decisions to complex model changes we are always at your service."
                    },
                    {
                        logo: Development_icon,
                        name: 'Design & Development',
                        text: "Design & development always have continues challenges. Loonum support services creates simple guidelines as well as personal engagement for any challenge our clients face."
                    },
                    {
                        logo: Deployment_icon,
                        name: 'Deployment & Integration',
                        text: "Digital transformation and integration is a complex journey. We do not expect our clients to trouble shoot technical challenges. We engage on every step of the way with a 24/7 support system."
                    }
                ]
            }],

    },
    NEW_WAY_WORKING_DATA: {
        heading: 'Let us help you to simplify your business challenges so you can serve your customers and increase revenue',
        image: LET_US_HELP,
        description: "At Loonum we do not believe your world revolves around digital. We believe in business model generation with a niche value proposition towards your customers. In a compressed timeframe we understand your business model, define and validate with you and see where it needs a digital output. That’s where we believe in our value."

    }

}