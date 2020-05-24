import React from "react"
import Layout from "../components/Layout/index"
import ContactForm from '../components/contactForm/index'
import ServicesList from '../components/ServicesList/index'
import Hero from '../components/Hero/index'
import PAGE_DATA from '../Content/servicesPageData'

const Services = () => {
    return (
        <Layout>
            <Hero {...PAGE_DATA.HERO_DATA} />
            <ServicesList {...PAGE_DATA.SERVICE_LIST} NEW_WAY_WORKING_DATA= {PAGE_DATA.NEW_WAY_WORKING_DATA}/>
            <ContactForm />
        </Layout>
    )
}

export default Services