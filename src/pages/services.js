import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"
import ContactForm from '../components/contactForm/index'
import ServicesList from '../components/ServicesList/index'
import Hero from '../components/Hero/index'
import PAGE_DATA from '../Content/servicesPageData'
import HOME_PAGE_DATA from '../Content/homePageData'
import HEAD from '../Head/Head'
import WorkWithSection from '../components/WorkWithSection/index.js'
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
            <WorkWithSection {...HOME_PAGE_DATA.WHO_WE_WORK_WITH_DATA}/>
            <ContactForm url='/services' color="WHITE"/>
        </Layout>
    )
}

export default Services