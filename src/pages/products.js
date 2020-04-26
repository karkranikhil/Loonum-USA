import React from "react"
import Layout from "../components/Layout/index"
import SmallBusiness from '../components/SmallBusiness/index'
import PageJumbotron from '../components/PageJumbotron/index'
import PRODUCT_LOGO from '../images/Products_Page/product_logo.png'
const PRODUCT_JUMBO_DATA = {
    icon: PRODUCT_LOGO,
    heading: 'A product set curated just for Small Businesses.',
    subtext: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
}
const Product = () => {
    return (
        <Layout>
            <section className="pt-5">
                <PageJumbotron {...PRODUCT_JUMBO_DATA} />
            </section>
           
            <SmallBusiness />
        </Layout>
    )
}

export default Product