import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"
import Hero from '../components/Hero/index'
import BdpSection from '../components/BdpSection/index'
import DevicesSection from '../components/DevicesSection/index'
import HomeProductSection from '../components/HomeProductSection/index'
import PAGE_DATA from '../Content/homePageData'
const Index = () => {
    return (
        <Layout>
            <Helmet>
                <title>Loonum | Home</title>
                <meta
                    name="description"
                    content="Loonum offers a complete 360 product set for small business’s digital transformation and process. Our unique blend of user-centric digital products and ROI focused business design approach will deliver meaningful success for customers."
                />
            </Helmet>
            <Hero {...PAGE_DATA.HERO_DATA} />
            <BdpSection {...PAGE_DATA.BDP_SECTION} />
            <DevicesSection {...PAGE_DATA.DEVICE_SECTION} />
            <HomeProductSection {...PAGE_DATA.HOME_PRODUCT_SECTION} />
        </Layout>
    )
}

export default Index
