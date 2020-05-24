

import React from "react"
import RoadMap from '../Roadmap/index.js'
import Card from '../Card/index.js'
import NewWayWorking from '../NewWayWorking/index.js'
import './smallBusiness.scss'
import Tabs from '../Tabs/index.js'
import FINANCIAL_LOGO from '../../images/Products_Page/Financial_Management.png'
import SUPLY_CHAIN_LOGO from '../../images/Products_Page/Supply_Chain_Management.png'
import COLLABORATIVE_LOGO from '../../images/Products_Page/Collaborative_tool_icon.png'


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

// const TAB_LIST = ["FOR SMALL BUSINESS", "FOR MEDIUM ENTERPRISE", "WEBSITES", "CMS DASHBOARD", "INVENORY MANAGEMENT"]
const SmallBusiness = ({NEW_WAY_WORKING_DATA, TAB_LIST }) => {
    return (
        <section className="tabs_wrapper">

           
                    <Tabs>
                        {TAB_LIST.map(item => (
                            <div DEFAULT={TAB_LIST[0].label} label={item.label} key={item.label} data={item}>
                                <div className="d-block d-md-none responsive_tab_header">
                                    <div className="tab_box_heading">{item.label}</div></div>
                                <div className="row page_sub_heading">
                                    <div className="col mt-4 mb-5 text-center">
                                        <h5 className="description">{item.Description}</h5>
                                    </div>
                                </div>
                                <Card data={item.CARDS} />
                            </div>
                        ))}
                    </Tabs>
            <NewWayWorking {...NEW_WAY_WORKING_DATA} />
            <RoadMap type="BLUE" ROAD_MAP_DATA={ROAD_MAP_DATA} />

        </section>
    )
}

export default SmallBusiness