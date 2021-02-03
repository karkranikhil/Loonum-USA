import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"
import SmallBusiness from '../components/SmallBusiness/index'
import PAGE_DATA from '../Content/productPageData'
import Hero from '../components/Hero/index'
import HEAD from '../Head/Head'
const Product = (props) => {
    return (
        <Layout>
            <Helmet>
                <title>Loonum | Products</title>
                <meta
                    name="description"
                    content="A product set curated just for Small Businesses.With over 15 years of extensive web solution experience Loonum offers a end-to-end design led approach to product design, development and implimentation. Our years of experience will ensure to focus on, defining right problems and aligning user friendly products to your customers."
                />
            </Helmet>
            <HEAD />
            <Hero {...PAGE_DATA.HERO_DATA} PAGE="PRODUCT"/>
            <SmallBusiness TAB_LIST={PAGE_DATA.TAB_LIST} NEW_WAY_WORKING_DATA= {PAGE_DATA.NEW_WAY_WORKING_DATA}  {...props} />

        </Layout>
    )
}

export default Product