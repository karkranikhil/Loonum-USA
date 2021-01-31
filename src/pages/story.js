import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"
import ContactForm from '../components/contactForm/index'
import Founders from '../components/Founders/index'
import RoadMap from '../components/Roadmap/index'
import PAGE_DATA from '../Content/ourStoryData'
import HEAD from '../Head/Head'
import HOME_PAGE_DATA from '../Content/homePageData'
import WorkWithSection from '../components/WorkWithSection/index.js'
const Story = () => {
    return (
        <Layout>
            <Helmet>
                <title>Loonum | Our Story</title>
                <meta
                    name="description"
                    content="Loonum was co-created by Dananjaya & Nikhil, when they aquatinted as colleagues working for a project at RMIT. Both felt how passionate they are doing what they love, creating things to improve people’s lives. Humble coffee catch ups and talking hours on how they want design & build products that has value, led to this great venture. With over 15 years of global design & development experience, they’ve been delivering valued outcomes to major organisations."
                />
            </Helmet>
            <HEAD/>
            <Founders {...PAGE_DATA.OUR_STORY_DATA} />
            <WorkWithSection {...HOME_PAGE_DATA.WHO_WE_WORK_WITH_DATA}/>
            <RoadMap/>
            <ContactForm color="WHITE" url='/story' />
        </Layout>
    )
}

export default Story