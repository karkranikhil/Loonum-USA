import HERO_IMAGE from '../images/Services_Page/WHAT_WE_DO.png'
import UX_UI_icon from '../images/Services_Page/UX_UI.png'
import Development_icon from '../images/Services_Page/Development.png'
import Deployment_icon from '../images/Services_Page/Deployment.png'
import LET_US_HELP from '../images/Services_Page/LET_US_HELP.png'
export default {
    HERO_DATA: {
        HERO_HEADING: 'This is what we do',
        HERO_SUBHEADING: "As experts in the industry we approach clients with empathy to achieve the best solutions for their complex problems. Our practice starts with Busniess & Digital Stratgey, Experience Design and Managed Services to help our client’s customer’s & user experience.",
        PARAGRAPH: "We make sure to stay with you every step of the way!",
        HERO_IMAGE: HERO_IMAGE
    },
    SERVICE_LIST:{
        BUILD_DESIGN: {
            HEADING: 'We have expertise across all phases of the product development lifecycle and can work with you to deliver part or all of the solution. Design & Build is all about creating a detailed design and executing on the development, systems integration and testing.',
            SERVICES_TYPES: [
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
        TAB_LIST:['Consulting', 'Design & Build', 'Digital marketing', 'Support'],
        NEW_WAY_WORKING_DATA: {
            heading: 'Let us help you to simplify your business challenges so you can serve your customers and increase revenue',
            image: LET_US_HELP,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "

        }
    }
    
}