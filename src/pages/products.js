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
            {/* <section className="pt-5">

                <PageJumbotron {...PRODUCT_JUMBO_DATA} />
            </section> */}

            <SmallBusiness {...PAGE_DATA.SMALL_BUSINESS}/>
           
        </Layout>
    )
}

export default Product