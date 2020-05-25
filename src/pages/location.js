import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"
import ContactForm from '../components/contactForm/index'
import PageJumbotron from '../components/PageJumbotron/index'
import LOCATION_IMAGE from '../images/Contact_Us_Page/Contact_Us_Hero.png'
const LOCATION_JUMBO_DATA = {
    heading: 'Where we create collobaorative futures',
    subtext: '37.8136° S | 144.9631° E',
    image: LOCATION_IMAGE
}
const Location = () => {
    return (
        <Layout hideEmail>
            <Helmet>
                <title>Loonum | location</title>
                <meta
                    name="description"
                    content="Where we create collobaorative futures. Go ahead and talk to us Want to know more about how we can help? Have a question? Simply fill in the form and I will get back to you within 24 hrs."
                />
            </Helmet>
            <section className="pt-5 pb-5">
                <PageJumbotron {...LOCATION_JUMBO_DATA} />
            </section>
            <ContactForm color="WHITE" TYPE='CONTACT' url='/idea'/>
        </Layout>
    )
}

export default Location