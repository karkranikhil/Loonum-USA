import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"

const PageNotFound = () => {
    return (
        <Layout>
            <Helmet>
                <title>Loonum | Not Found</title>
                <meta
                    name="description"
                    content="Loonum offers a complete 360 product set for small business’s digital transformation and process. Our unique blend of user-centric digital products and ROI focused business design approach will deliver meaningful success for customers."
                />
            </Helmet>
            <div className="idea_fullpage">
                <h1 className="idea_text">Not Found</h1>
            </div>
        </Layout>
    )
}

export default PageNotFound