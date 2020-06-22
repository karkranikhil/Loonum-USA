import React from "react"
import {Helmet} from "react-helmet"
import META_IMAGE from '../images/Home_Page/home_meta.png'

const HEAD = () => {
    return (
        <Helmet>
            {/* <!-- Primary Meta Tags --> */}
            <title>Loonum - Grow with an improved business model and adaptable web solutions.</title>
            <meta name="title" content="Loonum - Grow with an improved business model and adaptable web solutions." />
            <meta name="description" content="Loonum offers a complete 360 product set for small business’s digital transformation and process. Our unique blend of user-centric digital products and ROI focused business design approach will deliver meaningful success for customers." />
            <meta
                name="keywords"
                content="Loonum Design, Loonum Development, Loonum Consulting, Loonum, Loonum Melbourne, Loonum Australia, IT company, IT Services Company, top it companies, best it companies, management consulting firms, strategy consulting sydney,education consultants in melbourne, job consultancy in melbourne, top management consulting firms in india, top management consulting firms in melbourne, management consulting, loonum, loonum consulting, loonum design, best recruitment agencies melbourne, seek, management consulting firms, top consulting firms 2019, top consulting firms 2020, top consulting firms 2021, top consulting firms 2022,scoot,7 eleven,delwp,graincorp,thomson reuters,prudential,7 eleven australia,vic roads learners book,google certified,logo 7 eleven, sales,7 eleven app,wfp,7 app,telstra ringtones,711 fuel appexperience design,experience designer,join us,7 eleven fuel app,axicorp,velocity frequent,nuffield,mumbai to melbourne,onsen sydney,rex careers,office jobs in melbourne,barden produce,who can supervise a learner driver vic,scoot call centre,suncorp brands, html tutorial, web development, web development melbourne, web development australia, web development companies list, front end tools for web development, best web development company, Consulting Companies, Inventory management solution, SEO, Stock management,FOR SMALL BUSINESS,WEBSITES,CMS DASHBOARD, INVENORY MANAGEMENT, Digital Representation, Content Management, E-commerce, Customised & Responsive, E-services, Asset Management, Reports, Supplier Management, UX & UI Design, Deployment, Development, Social Media"/>
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://loonum.com/" />
            <meta property="og:title" content="Loonum - Grow with an improved business model and adaptable web solutions." />
            <meta property="og:description" content="Loonum offers a complete 360 product set for small business’s digital transformation and process. Our unique blend of user-centric digital products and ROI focused business design approach will deliver meaningful success for customers." />
            <meta property="og:image" content={META_IMAGE} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://loonum.com/" />
            <meta property="twitter:title" content="Loonum - Grow with an improved business model and adaptable web solutions." />
            <meta property="twitter:description" content="Loonum offers a complete 360 product set for small business’s digital transformation and process. Our unique blend of user-centric digital products and ROI focused business design approach will deliver meaningful success for customers." />
            <meta property="twitter:image" content={META_IMAGE} />
            <meta name="google-site-verification" content="lpPoMtZGiIkedJHkBiXg7IocxecaNTKkKmSuLHPSB3s"/>
            <link rel="canonical" href="https://www.loonum.com/" />
        </Helmet>
    )
}

export default HEAD