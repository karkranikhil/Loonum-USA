import HERO_IMAGE from '../images/Products_Page/HERO_IMG.png'
import DIGITAL_LOGO from '../images/Products_Page/digital_logo.png'
import CONTENT_LOGO from '../images/Products_Page/content_management_logo.png'
import INVENTORY_LOGO from '../images/Products_Page/inventory_logo.png'
import FINANCIAL_LOGO from '../images/Products_Page/Financial_Management.png'
import SUPLY_CHAIN_LOGO from '../images/Products_Page/Supply_Chain_Management.png'
import COLLABORATIVE_LOGO from '../images/Products_Page/Collaborative_tool_icon.png'
import ECORMMERCE_WORKING_IMG from '../images/Products_Page/Ecommerce-new-way-of-working.png'
export default {
    HERO_DATA: {
        HERO_HEADING: 'A product set curated just for Small Businesses.',
        HERO_SUBHEADING: "With over 15 years of extensive web solution experience Loonum offers a end-to-end design led approach to product design, development and implimentation. Our years of experience will ensure to focus on, defining right problems and aligning user friendly products to your customers.",
        HERO_IMAGE: HERO_IMAGE
    },
    SMALL_BUSINESS: {
        Description: 'The three pillar digital solution package for small businesses to ensure value where a website, CMS and an inventory management system puts you on the path to support change, scale and achieve sustainable growth.',
        SMALL_BUSINESS_CARDS: [
            {
                logo: DIGITAL_LOGO,
                name: 'Digital Representation',
                text: "Loonum believes, the first footprint of digital transformation is to have a user centric website which is your digital representation where customers understands who you are & what you offer."
            },
            {
                logo: CONTENT_LOGO,
                name: 'Content Management',
                text: "Loonum CMS is simple and easy to use for everyday small businesses. We didn’t build so you have to learn how to use it. Also sets a easy integration to grow with the business."
            },
            {
                logo: INVENTORY_LOGO,
                name: 'Inventory Management ',
                text: "Loonum inventory software let you keep track of your stock levels and values on a daily basis. This simple platform is carefully designed for independent small businesses (retail & wholesale) and service providers."
            }
        ],
        NEW_WAY_WORKING_DATA : {
            heading: 'Get started with your website for the new way of working',
            image: ECORMMERCE_WORKING_IMG,
            description: "With ever changing world of digital, the current climate has given opportunities to reimagine the way we engage with our customers and how we operate as a business.At Loonum we approach with empathy and speed to action which fast track your digital representation come to life so your customers can continue to engage with your business. "
        }

    }
}