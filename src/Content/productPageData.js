import ImageList from './imagesData'

// import HERO_IMAGE from '../images/Products_Page/HERO_IMG.png'
// import DIGITAL_LOGO from '../images/Products_Page/digital_logo.png'
// import CONTENT_LOGO from '../images/Products_Page/content_management_logo.png'
// import INVENTORY_LOGO from '../images/Products_Page/inventory_logo.png'
// import ECORMMERCE_WORKING_IMG from '../images/Products_Page/Ecommerce-new-way-of-working.png'


import Inventory_fill from '../images/Tab_Icons/Inventory_fill.svg'
import Inventory_outline from '../images/Tab_Icons/Inventory_outline.svg'
import SMS_fill from '../images/Tab_Icons/SMS_fill.svg'
import SMS_outline from '../images/Tab_Icons/SMS_outline.svg'
import Small_business_fill from '../images/Tab_Icons/Small_business_fill.svg'
import Small_business_outlilne from '../images/Tab_Icons/Small_business_outlilne.svg'
import Website_fill from '../images/Tab_Icons/Website_fill.svg'
import Website_outline from '../images/Tab_Icons/Website_outline.svg'
const { HERO_IMAGE, DIGITAL_LOGO, CONTENT_LOGO, INVENTORY_LOGO, ECORMMERCE_WORKING_IMG  } = ImageList.PRODUCT_PAGE_IMAGES
export default {
    HERO_DATA: {
        HERO_HEADING: 'A product set curated just for Small Businesses.',
        HERO_SUBHEADING: "With over 15 years of extensive web solution experience Loonum offers a end-to-end design led approach to product design, development and implimentation. Our years of experience will ensure to focus on, defining right problems and aligning user friendly products to your customers.",
        HERO_IMAGE: HERO_IMAGE
    },
    TAB_LIST: [
        {
            label: 'FOR SMALL BUSINESS',
            mobileLabel: 'SMALL BUSINESS',
            image: Small_business_outlilne,
            image_active: Small_business_fill,
            Description: 'The three pillar digital solution package for small businesses to ensure value where a website, CMS and an inventory management system puts you on the path to support change, scale and achieve sustainable growth.',
            CARDS: [
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
                    name: 'Inventory Management',
                    text: "Loonum inventory software let you keep track of your stock levels and values on a daily basis. This simple platform is carefully designed for independent small businesses (retail & wholesale) and service providers."
                }
            ]
        },
        {
            label: 'WEBSITES',
            mobileLabel: 'WEBSITES',
            image: Website_outline,
            image_active: Website_fill,
            Description: 'As experts in web design & development, we build simple websites to ecommerce and custom designs. Our design process start from UX with a user and business understanding. Combine with unique user interfaces and functionality that put you above your competitors.',
            CARDS: [
                {
                    logo: DIGITAL_LOGO,
                    name: 'Customised & Responsive',
                    text: "Our design approach is focused is business to grow with its audience. It is responsive, custom built and simple enough to personalise & manage content without technical knowledge "
                },
                {
                    logo: CONTENT_LOGO,
                    name: 'E-commerce',
                    text: "We build customisable ecommerce websites which offers innovative ways to add value to your buyers shopping experience and ensure they keep coming back for more."
                },
                {
                    logo: INVENTORY_LOGO,
                    name: 'E-services',
                    text: "Loonum design and develop websites with service functionality to increase remote & personalised online experience. We spcialised in business models with service offerings without physical products."
                }
            ]
        },
        {
            label: 'CMS DASHBOARD',
            mobileLabel: 'CMS',
            image: SMS_outline,
            image_active: SMS_fill,
            Description: 'After talking to so many small businesses we understood what they really need. Their simple desifre was ‘I wish I have more time to grow my business than spending time with systems’. So the design team innovated something simple, user friendly, efficient and productive.',
            CARDS: [
                {
                    logo: DIGITAL_LOGO,
                    name: 'Asset Management',
                    text: "Ecommerce customer value propositions are based on tangible products. We design and build customised cms to manage them with a scope to sustainable and scalable business growth."
                },
                {
                    logo: CONTENT_LOGO,
                    name: 'Comms & Social Media',
                    text: "Today, small businesses are heavily depends on automated systems to save time & money. Loonum has defined a simplified process to update social media & customer engagement platform."
                },
                {
                    logo: INVENTORY_LOGO,
                    name: 'Reports',
                    text: "Loonum design and develop websites with service functionality to increase remote & personalised online experience. We spcialised in business models with service offerings without physical products."
                }
            ]
        }, {
            label: 'INVENORY MANAGEMENT',
            mobileLabel: 'INVENTORY',
            image: Inventory_outline,
            image_active: Inventory_fill,
            Description: 'Inventory management software tools let you keep track of stock levels and values on a daily basis. Loonum system calculates the value of the goods you have on hand using an cost effective method. This simple tracking software is great for independent small ecommerce businesses.',
            CARDS: [
                {
                    logo: DIGITAL_LOGO,
                    name: 'Stock Entry',
                    text: "Get your inventory up and running fast by quickly importing large number of inventory items from a spreadsheet. We provide a simple user flow to complete your transition. "
                },
                {
                    logo: CONTENT_LOGO,
                    name: 'Maintenance',
                    text: "Using a stock management system help you to spend less time on data entry. You can easily keep a track on what you buy from your vendors to what you sell to your customers."
                },
                {
                    logo: INVENTORY_LOGO,
                    name: 'Supplier Management',
                    text: "One of the key challenges businesses face is supplier orders and delivery management. We can help you to overcome these key challenges with a system simplified to your needs."
                }
            ]
        }],
    NEW_WAY_WORKING_DATA: {
        heading: 'Get started with your website for the new way of working',
        image: ECORMMERCE_WORKING_IMG,
        description: "With ever changing world of digital, the current climate has given opportunities to reimagine the way we engage with our customers and how we operate as a business.At Loonum we approach with empathy and speed to action which fast track your digital representation come to life so your customers can continue to engage with your business. "
    }
}