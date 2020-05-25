import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout/index"
import ContactForm from '../components/contactForm/index'
import Founders from '../components/Founders/index'
import RoadMap from '../components/Roadmap/index'
import FINANCIAL_LOGO from '../images/Our_Story_Page/Financial_Management.png'
import SUPLY_CHAIN_LOGO from '../images/Our_Story_Page/Supply_Chain_Management.png'
import COLLABORATIVE_LOGO from '../images/Our_Story_Page/Collaborative _tools_icon.png'
import PAGE_DATA from '../Content/ourStoryData'

const ROAD_MAP_DATA = [
    {
        logo: FINANCIAL_LOGO,
        name: 'Fianancial Management',
        text: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        logo: SUPLY_CHAIN_LOGO,
        name: 'Supply Chain Management ',
        text: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        logo: COLLABORATIVE_LOGO,
        name: 'Collaborative Tools',
        text: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

const Story = () => {
    return (
        <Layout>
            <Helmet>
                <title>Loonum | Our Story</title>
                <meta
                    name="description"
                    content="Loonum was co-created by Dananjaya & Nikhil, when they aquatinted as colleagues working for a prject at RMIT. Both felt how passionate they are doing what they love, creating things to improve people’s lives. Humble coffee catch ups and talking hours on how they want design & build products that has value, led to this great venture. With over 15 years of global design & development experience, they’ve been delivering valued outcomes to major organisations."
                />
            </Helmet>
            <Founders {...PAGE_DATA.OUR_STORY_DATA} />
            <RoadMap ROAD_MAP_DATA={ROAD_MAP_DATA} />
            <ContactForm color="WHITE" url='/story' />
        </Layout>
    )
}

export default Story