import React from "react"
import Layout from "../components/Layout/index"
import PageJumbotron from '../components/PageJumbotron/index'
import ContactForm from '../components/contactForm/index'
import ServicesList from '../components/ServicesList/index'
const SERVICE_JUMBO_DATA = {
    heading: 'This is what we do',
    subtext: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
}
const Services = () => {
    return (
        <Layout>
            <section className="pt-5">
                <PageJumbotron {...SERVICE_JUMBO_DATA} />
            </section>
            <ServicesList />
            <ContactForm />
        </Layout>
    )
}

export default Services