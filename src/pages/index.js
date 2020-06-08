import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"
import Hero from '../components/Hero/index'
import BdpSection from '../components/BdpSection/index'
import DevicesSection from '../components/DevicesSection/index'
import HomeProductSection from '../components/HomeProductSection/index'
import PAGE_DATA from '../Content/homePageData'
import HEAD from '../Head/Head'
const Index = () => {
    return (
        <Layout>
            <Helmet>
                <title>Loonum | Home</title>
            </Helmet>
            <HEAD />
            <Hero {...PAGE_DATA.HERO_DATA} PAGE="HOME" />
            <BdpSection {...PAGE_DATA.BDP_SECTION} />
            <DevicesSection {...PAGE_DATA.DEVICE_SECTION} />
            <HomeProductSection {...PAGE_DATA.HOME_PRODUCT_SECTION} />
        </Layout>
    )
}

export default Index
