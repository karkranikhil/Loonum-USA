import { NAV_LIST } from './headerPageData'
import FACEBOOK from '../images/Home_Page/facebook.png'
import LINKED_IN from '../images/Home_Page/linkedin.png'
import LOCATION from '../images/Home_Page/location.png'
import TWITTER from '../images/Home_Page/twitter.png'
import YOUTUBE from '../images/Home_Page/youtube.png'
import FOOTER_LOGO from '../images/Home_Page/FOOTER_LOGO.png'

export const SOCIAL_MEDIA = [
    {
        image: TWITTER,
        Links: '#'
    },
    {
        image: LINKED_IN,
        Links: 'https://www.linkedin.com/company/42815767/admin/'
    },
    {
        image: FACEBOOK,
        Links: 'https://www.facebook.com/Loonum-102425771465986/?modal=admin_todo_tour'
    },
    {
        image: YOUTUBE,
        Links: 'https://www.youtube.com/channel/UC9x_iJEjM2Iu5MOozn8JfXw?view_as=subscriber'
    },
    {
        image: LOCATION,
        Links: '#'
    },
]
export default {
    FOOTER_DATA: {
        FOOTER_LOGO: FOOTER_LOGO,
        FOOTER_SUBTEXT_ONE: 'Sometime you have to let go of things, to make room for new things and thoughts.',
        FOOTER_SUBTEXT_TWO: 'We are Loonum, develop by design together with people like us.',
        PRIVACY_TEXT: 'Copyright © 2020 Loonum. All rights reserved. | Privacy Policy | GDPR | Modern Slavery Statement',
        NEW_TO_LOONUM: 'New to Loonum?',
        PRODUCT_LIST: NAV_LIST,
        WHY_LOONUM: "Why Loonum?",
        WHY_LOONUM_LIST: [
            {
                name: 'Consulting',
                url: '/products/'
            },
            {
                name: 'Design & Build',
                url: '/products/'
            },
            {
                name: 'Support',
                url: '/products/'
            }
        ],
        FIND_US: 'Find us',
        SOCIAL_MEDIA: SOCIAL_MEDIA
    }


}