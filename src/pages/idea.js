import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"
import SimpleIdea from '../components/SimpleIdea/index'
import ContactForm from '../components/contactForm/index'
import HEAD from '../Head/Head'
const Idea = () => {
    return (
        <Layout>
            <Helmet>
                <title>Loonum | Simple Idea</title>
                <meta
                    name="description"
                    content="Loonum offers a complete 360 product set for small business’s digital transformation and process. Our unique blend of user-centric digital products and ROI focused business design approach will deliver meaningful success for customers."
                />
            </Helmet>
            <HEAD />
            <SimpleIdea />
            <ContactForm url='/idea' color="WHITE" TYPE="IDEA"/>
        </Layout>
    )
}

export default Idea