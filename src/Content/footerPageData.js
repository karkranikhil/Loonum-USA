import { NAV_LIST } from './headerPageData'
import FACEBOOK from '../images/Home_Page/SVG/facebook icon.svg'
import LINKED_IN from '../images/Home_Page/SVG/linkedin icon.svg'
import LOCATION from '../images/Home_Page/SVG/location icon.svg'
import TWITTER from '../images/Home_Page/SVG/twitter icon.svg'
import YOUTUBE from '../images/Home_Page/SVG/youtube icon.svg'
import INSTAGRAM from '../images/Home_Page/SVG/Instagram icon.svg'
import FOOTER_LOGO from '../images/Home_Page/SVG/footer Loonum logo.svg'

export const SOCIAL_MEDIA = [
    {
        image: TWITTER,
        Links: 'https://twitter.com/Loonum_'
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
        image: INSTAGRAM,
        Links: 'https://www.instagram.com/loonum_/',
    },
    {
        image: LOCATION,
        Links: '#',
        class: "margin-top-5"
    },
]
export default {
    FOOTER_DATA: {
        FOOTER_LOGO: FOOTER_LOGO,
        FOOTER_SUBTEXT_ONE: 'Break free from the norm and take the journey to create something incredible.',
        FOOTER_SUBTEXT_TWO: 'We are Loonum - designing together and forming partnerships for successful enterprises.',
        PRIVACY_TEXT: 'Copyright © 2020 Loonum. All rights reserved. | Privacy Policy | GDPR | Modern Slavery Statement',
        NEW_TO_LOONUM: 'New to Loonum?',
        PRODUCT_LIST: NAV_LIST,
        WHY_LOONUM: "Why Loonum?",
        WHY_LOONUM_LIST: [
            {
                name: 'Consulting',
                url: '/services/',
                state: 'CONSULTING'
            },
            {
                name: 'Design & Build',
                url: '/services/',
                state: 'DESIGN & BUILD'
            },
            {
                name: 'Support',
                url: '/services/',
                state: 'SUPPORT'
            }
        ],
        FIND_US: 'Find us',
        SOCIAL_MEDIA: SOCIAL_MEDIA
    }


}