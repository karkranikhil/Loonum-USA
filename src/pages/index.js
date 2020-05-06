import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"
import Hero from '../components/Hero/index'
import BdpSection from '../components/BdpSection/index'
import DevicesSection from '../components/DevicesSection/index'
import HomeProductSection from '../components/HomeProductSection/index'
const Index = () => {
    return (
        <Layout>
            <Helmet>
                <title>Loonum</title>
            </Helmet>
            <Hero />
            <BdpSection />
            <DevicesSection />
            <HomeProductSection />
        </Layout>
    )
}

export default Index