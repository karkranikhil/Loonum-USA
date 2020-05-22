

import React from "react"
import RoadMap from '../Roadmap/index.js'
import Card from '../Card/index.js'
import NewWayWorking from '../NewWayWorking/index.js'
import ResponsiveTabs from '../ResponsiveTabs/index.js'
import './smallBusiness.scss'
// import PRODUCT_LOGO from '../../images/Products_Page/product_logo.png'
import Tabs from '../Tabs/index.js'
import DIGITAL_LOGO from '../../images/Products_Page/Digital_representation_icon.png'
import CONTENT_LOGO from '../../images/Products_Page/Content_management_icon.png'
import INVENTORY_LOGO from '../../images/Products_Page/Inventory_Management.png'
import FINANCIAL_LOGO from '../../images/Products_Page/Financial_Management.png'
import SUPLY_CHAIN_LOGO from '../../images/Products_Page/Supply_Chain_Management.png'
import COLLABORATIVE_LOGO from '../../images/Products_Page/Collaborative_tool_icon.png'
import ECORMMERCE_WORKING_IMG from '../../images/Products_Page/Ecommerce_new_way_of_working_icon.png'


const SMALL_BUSINESSE = [
    {
        logo: DIGITAL_LOGO,
        name: 'Digital Representation',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        logo: CONTENT_LOGO,
        name: 'Content Management',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        logo: INVENTORY_LOGO,
        name: 'Inventory Management ',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
]
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
const SmallBusiness = ({ Description, SMALL_BUSINESS_CARDS, NEW_WAY_WORKING_DATA, TAB_LIST }) => {
    return (
        <section className="wrapper">

           
                    <Tabs>
                        {TAB_LIST.map(item => (
                            <div DEFAULT={TAB_LIST[0].label} label={item.label} key={item.label} data={item}>
                                <div className="d-block d-md-none responsive_tab_header">
                                    <div className="tab_box_heading">{item.label}</div></div>
                                <div className="row page_sub_heading">
                                    <div className="col mt-4 mb-5 text-center">
                                        <h5>{Description}</h5>
                                    </div>
                                </div>
                                <Card data={SMALL_BUSINESS_CARDS} />
                            </div>
                        ))}
                    </Tabs>
            <NewWayWorking {...NEW_WAY_WORKING_DATA} />
            <RoadMap type="BLUE" ROAD_MAP_DATA={ROAD_MAP_DATA} />

        </section>
    )
}

export default SmallBusiness