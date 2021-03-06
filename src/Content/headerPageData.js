import ImageList from './imagesData'
// import LOGO_WEB from '../images/Home_Page/LOGO_WEB.png'
// import LOGO_MOBILE from '../images/Home_Page/LOGO_MOBILE.png'
import RIGHT_ARROW from '../images/Home_Page/RIGHT_ARROW.png'
import HAMBERGER_BLUE from '../images/Home_Page/SVG/hamburger icon mobile.svg'
import CLOSE_ARROW_GREY from '../images/Home_Page/CLOSE_ARROW_GREY.png'
const { LOONUM_LOGO_WEB, LOONUM_LOGO_MOBILE} = ImageList.HOME_PAGE_IMAGES
export const NAV_LIST = [
    {
        name: 'PRODUCTS',
        url: '/products/'
    },
    {
        name: 'SERVICES',
        url: '/services/'
    },
    // {
    //     name: 'A SIMPLE IDEA',
    //     url: '/idea/'
    // },
    {
        name: 'OUR STORY',
        url: '/story/'
    },
    {
        name: 'CONTACT US',
        url: '/contact/'
    }
]
export default {
    HEADER: {
        LOGO_MOBILE: LOONUM_LOGO_MOBILE,
        RIGHT_ARROW: RIGHT_ARROW,
        LOGO_WEB: LOONUM_LOGO_WEB,
        HAMBERGER: HAMBERGER_BLUE,
        CLOSE_ARROW: CLOSE_ARROW_GREY,
        NAV_LIST: NAV_LIST
    }

}