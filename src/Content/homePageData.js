import ImageList from './imagesData'
// import HERO_IMAGE from '../images/Home_Page/HERO_IMG.png'
// import WEBSITE_IMAGE from '../images/Home_Page/website.png'
// import CMS_IMAGE from '../images/Home_Page/CMS.png'
// import INVENTORY_IMAGE from '../images/Home_Page/inventory.png'
import STICKY_WHITE_CROSS from '../images/Home_Page/STICKY_WHITE_CROSS.png'
import STICKY_GREY_CROSS from '../images/Home_Page/STICKY_GREY_CROSS.png'
// import DEVICE_SECTION_WEB from '../images/Home_Page/DEVICE_SECTION_WEB.png'
// import DEVICE_SECTION_MOBILE from '../images/Home_Page/DEVICE_SECTION_MOBILE.png'

const { HERO_IMAGE, DEVICE_SECTION_WEB, DEVICE_SECTION_MOBILE, WEBSITE_IMAGE, CMS_IMAGE, INVENTORY_IMAGE } = ImageList.HOME_PAGE_IMAGES
export const CARD_DETAILS = [
    {
        name: 'Website',
        image: WEBSITE_IMAGE,
        text: "We design and develop websites that build trust and demonstrate credibility, while generating new revenue streams. Our strategists, and user experience development teams will create features and functionalities that are expected by your customers."
    },
    {
        name: 'CMS',
        image: CMS_IMAGE,
        text: "We will build your content management system (CMS) that is specific to your needs. You’ll never need to learn another CMS program, as when you use our custom system everything will be business as usual. "
    },
    {
        name: 'Inventory',
        image: INVENTORY_IMAGE,
        text: "Loonum will construct a working inventory system that is unique to your business. It will track sales, incoming supplier orders, and adjust your stock file so you’ll have total control over your inventory systems."
    }
]
export default {
    HERO_DATA: {
        HERO_HEADING: 'GROW YOUR BUSINESS FURTHER WITH LOONUM',
        HERO_SUBHEADING: "Loonum offers a complete product set for businesses to develop and transform their current (or new) digital presence. Our unique blend of building user experience systems balanced with secure ROI targets, means higher turnover and increased growth.",
        HERO_IMAGE: HERO_IMAGE
    },
    BDP_SECTION: {
        HEADING: "BUSINESS & DIGITAL DESIGN SOLUTIONS",
        PARAGRAPH: "At Loonum we create solutions that support your business. We examine your current systems to find out how to improve and (re)build so you can use the digital processes in an improved economical way. We collaborate with our clients to be sure that our solution is optimized to your customer base and that the improvements offered are structured to their needs.We know that you understand your clients best, and while we provide the road, you’ll be driving the car.That's why we call this process the Business Design Platform."
    },
    DEVICE_SECTION: {
        HEADING: "ONE SOLUTION MULTIPLE DEVICES",
        SUB_HEADING: {
            One: 'With Loonum Business & Digital Design Solutions',
            Two: ' you will have 360 complete transparency Anytime Anywhere'
        },
        PARAGRAPH: "The digital marketplace is evolving at the speed of thought and innovating towards mobility is the way to stay on top of the competition. When you work with Loonum it will give you a 360 degree solution platform, you can offer services to your clients anywhere and at any time. We see revolutionary developments in small business mobility and remote engagement trends, and we know digital transformation is the most significant adaptation for small businesses to gain competitive advantage. Loonum makes sure your customers can access you on all channels and devices.",
        DEVICE_SECTION_MOBILE: DEVICE_SECTION_MOBILE,
        DEVICE_SECTION_WEB: DEVICE_SECTION_WEB
    },
    HOME_PRODUCT_SECTION: {
        CARD_DETAILS: CARD_DETAILS,
        HEADING: "SIMPLE AND EASY TO USE EXPERIENCE",
        SUB_HEADING: "At Loonum we follow the 3 Pillar Framework for digital success."
    },
    STICKY_FOOTER: {
        MESSAGE: 'Please send us your email address and we’ll contact you',
        SUCCESS_MESSAGE: 'We have received your message. James will get back to you within 24 hours.',
        PLACHOLDER: 'Type your email address',
        BTN_TEXT: 'Send',
        STICKY_GREY_CROSS: STICKY_GREY_CROSS,
        STICKY_WHITE_CROSS: STICKY_WHITE_CROSS
    }

}