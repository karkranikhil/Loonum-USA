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
        </Helmet>
    )
}

export default HEAD