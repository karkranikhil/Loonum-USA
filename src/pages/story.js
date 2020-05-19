import React from "react"
import Layout from "../components/Layout/index"
import ContactForm from '../components/contactForm/index'
import Founders from '../components/Founders/index'
import RoadMap from '../components/Roadmap/index'
import FINANCIAL_LOGO from '../images/Our_Story_Page/Financial_Management.png'
import SUPLY_CHAIN_LOGO from '../images/Our_Story_Page/Supply_Chain_Management.png'
import COLLABORATIVE_LOGO from '../images/Our_Story_Page/Collaborative _tools_icon.png'
import PageJumbotron from '../components/PageJumbotron/index'
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
            {/* <section className="pt-5 pb-5">
                <PageJumbotron {...STORY_JUMBO_DATA} />
            </section> */}
            <Founders {...PAGE_DATA.OUR_STORY_DATA}/>
            <RoadMap ROAD_MAP_DATA={ROAD_MAP_DATA} />
            <ContactForm color="WHITE"/>
        </Layout>
    )
}

export default Story