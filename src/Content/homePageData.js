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
        text: "We design and build your website to improve credibility, increase enquiries and generate revenue. Our strategists, UX designers and developers will create features and functionalities visually desires your customers."
    },
    {
        name: 'CMS',
        image: CMS_IMAGE,
        text: "You don’t need to adapt to a Content Management System like before. We will design your CMS according to your business process to and align the dashboard to your activities so its seamless to you BAU tasks."
    },
    {
        name: 'Inventory',
        image: INVENTORY_IMAGE,
        text: "After understanding your product range and storing method Loonum will design a system for your business rather waste time and cost with training yourself and staff for an off-the-shelve product."
    }
]
export default {
    HERO_DATA: {
        HERO_HEADING: 'Grow with an improved business model and adaptable web solutions.',
        HERO_SUBHEADING: "Loonum offers a complete 360 product set for small business’s digital transformation and process. Our unique blend of user-centric digital products and ROI focused business design approach will deliver meaningful success for customers.",
        HERO_IMAGE: HERO_IMAGE
    },
    BDP_SECTION: {
        HEADING: "What is Business & Digital Design Solutions",
        PARAGRAPH: "At Loonum we don’t build digital products so business can use them. We help our clients to understand their businesses and find where it needs the digital channel to support growth. In the process of our services we collaborate with our clients to build what their customers desire. When you work with us, you are the one who designing your business platform as you know your customers better than anyone else. That’s why we call this is Business Design Platform. "
    },
    DEVICE_SECTION: {
        HEADING: "One solution multiple devices",
        SUB_HEADING: {
            One: 'With Loonum Business & Digital Design Solutions',
            Two: ' you will have 360 complete transparency Anytime Anywhere'
        },
        PARAGRAPH: "The markets our evolving at the speed of thought and innovating towards mobility is the way to stay on top of the competition. We see revolutionary developments in small business mobility and remote engagement trends, and we know digital transformation is the most significant adaptation for small businesses to gain competitive advantage. Loonum make sure your customers can access you on all channels and devices.",
        DEVICE_SECTION_MOBILE: DEVICE_SECTION_MOBILE,
        DEVICE_SECTION_WEB: DEVICE_SECTION_WEB
    },
    HOME_PRODUCT_SECTION: {
        CARD_DETAILS: CARD_DETAILS,
        HEADING: "Simple and easy to use experience",
        SUB_HEADING: "Three pillar system interaction for your peace of mind"
    },
    STICKY_FOOTER: {
        MESSAGE: 'Just send your email address we will reach out to you',
        SUCCESS_MESSAGE: 'We have received your messaged. James will get back to you within 24 hours.',
        PLACHOLDER: 'Type your email address',
        BTN_TEXT: 'Send',
        STICKY_GREY_CROSS: STICKY_GREY_CROSS,
        STICKY_WHITE_CROSS: STICKY_WHITE_CROSS
    }

}