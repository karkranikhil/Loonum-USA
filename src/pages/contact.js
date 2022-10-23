import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"
import ContactFormNew from '../components/ContactFormNew/index'
import PageJumbotron from '../components/PageJumbotron/index'
import HEAD from '../Head/Head'
import LOCATION_IMAGE from '../images/Contact_Us_Page/SVG/loonum Contact Us Hero.svg'
const LOCATION_JUMBO_DATA = {
    heading: 'Get in touch',
    subtext: 'admin@loonum.com',
    image: LOCATION_IMAGE
}
const Contact = () => {
    return (
        <Layout hideEmail>
            <Helmet>
                <title>Loonum | Contact</title>
                <meta
                    name="description"
                    content="Where we create collaborative futures. Go ahead and talk to us Want to know more about how we can help? Have a question? Simply fill in the form and I will get back to you within 24 hrs."
                />
            </Helmet>
            <HEAD />
            <section className="bg-white">
                <PageJumbotron {...LOCATION_JUMBO_DATA} />
            </section>
            <ContactFormNew color="WHITE" TYPE='CONTACT' url='/contact'/>
        </Layout>
    )
}

export default Contact