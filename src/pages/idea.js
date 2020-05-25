import React from "react"
import Layout from "../components/Layout/index"
import SimpleIdea from '../components/SimpleIdea/index'
import ContactForm from '../components/contactForm/index'
const Idea = () => {
    return (
        <Layout>
            <SimpleIdea />
            <ContactForm url='/idea'/>
        </Layout>
    )
}

export default Idea