import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"
import ContactForm from '../components/contactForm/index'
import ServicesList from '../components/ServicesList/index'
import Hero from '../components/Hero/index'
import PAGE_DATA from '../Content/servicesPageData'
import HEAD from '../Head/Head'
const Services = (props) => {
    return (
        <Layout>
            <Helmet>
                <title>Loonum | Services</title>
                <meta
                    name="description"
                    content="This is what we do. As experts in the industry we approach clients with empathy to achieve the best solutions for their complex problems. Our practice starts with Busniess & Digital Stratgey, Experience Design and Managed Services to help our client’s customer’s & user experience. We make sure to stay with you every step of the way!"
                />
            </Helmet>
            <HEAD/>
            <Hero {...PAGE_DATA.HERO_DATA}  PAGE='GREY'/>
            <ServicesList {...PAGE_DATA.SERVICE_LIST} NEW_WAY_WORKING_DATA={PAGE_DATA.NEW_WAY_WORKING_DATA} {...props} />
            <ContactForm url='/services' color="WHITE"/>
        </Layout>
    )
}

export default Services