import React from "react"
import Layout from "../components/Layout/index"
import ContactForm from '../components/contactForm/index'
import PageJumbotron from '../components/PageJumbotron/index'
const LOCATION_JUMBO_DATA = {
    heading: 'Where we create collobaorative futures',
    subtext: '37.8136° S | 144.9631° E'
}
const Location = () => {
    return (
        <Layout hideEmail>
            <section className="pt-5 pb-5">
                <PageJumbotron {...LOCATION_JUMBO_DATA} />
            </section>
            <ContactForm color="WHITE" />
        </Layout>
    )
}

export default Location