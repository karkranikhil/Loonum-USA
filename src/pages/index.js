import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"
import Hero from '../components/Hero/index'
import BdpSection from '../components/BdpSection/index'
import DevicesSection from '../components/DevicesSection/index'
import HomeProductSection from '../components/HomeProductSection/index'
import PAGE_DATA from '../Content/homePageData'
import HEAD from '../Head/Head'
import HelpYouGrow from "../components/HelpYouGrow"
import WorkWithSection from '../components/WorkWithSection'
const Index = () => {
    console.log("PAGE_DATA", PAGE_DATA)
    return (
        <Layout>
            <Helmet>
                <title>Loonum | Home</title>
            </Helmet>
            <HEAD />
            <Hero {...PAGE_DATA.HERO_DATA} PAGE="HOME" />
            <HelpYouGrow {...PAGE_DATA.HELP_YOU_GROW}/>
            <BdpSection {...PAGE_DATA.BDP_SECTION} />
            <DevicesSection {...PAGE_DATA.DEVICE_SECTION} />
            <WorkWithSection {...PAGE_DATA.WHO_WE_WORK_WITH_DATA}/>
            <HomeProductSection {...PAGE_DATA.HOME_PRODUCT_SECTION} />
        </Layout>
    )
}

export default Index
