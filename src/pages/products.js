import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"
import SmallBusiness from '../components/SmallBusiness/index'
import PAGE_DATA from '../Content/productPageData'
import Hero from '../components/Hero/index'
const Product = () => {
    return (
        <Layout>
            <Helmet>
                <title>Loonum products</title>
            </Helmet>
            <Hero {...PAGE_DATA.HERO_DATA} />
            <SmallBusiness TAB_LIST={PAGE_DATA.TAB_LIST} NEW_WAY_WORKING_DATA= {PAGE_DATA.NEW_WAY_WORKING_DATA} />

        </Layout>
    )
}

export default Product