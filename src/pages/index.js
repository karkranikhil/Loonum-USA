import React from "react"
import Layout from "../components/Layout/index"
import Hero from '../components/Hero/index'
import BdpSection from '../components/BdpSection/index'
import DevicesSection from '../components/DevicesSection/index'
import HomeProductSection from '../components/HomeProductSection/index'
const Index = () => {
    return (
        <Layout>
            <Hero />
            <BdpSection />
            <DevicesSection />
            <HomeProductSection/>
        </Layout>
    )
}

export default Index