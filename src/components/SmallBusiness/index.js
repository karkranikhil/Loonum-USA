

import React from "react"
import RoadMap from '../RoadMap/index'
import smallBusinessStyle from './smallBusiness.module.scss'
import PRODUCT_LOGO from '../../images/Products_Page/product_logo.png'
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
const SmallBusiness = () => {
    return (
        <section className={smallBusinessStyle.wrapper}>
            <div className="container pt-5 pb-5">
                <div className="row pb-5">
                    <div className="col text-center">
                        <img src={PRODUCT_LOGO} alt="Products_Page" />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <h2 className={smallBusinessStyle.page_heading}>A product set curated just for Small Businesses. </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-4 mb-4 text-center">
                        <h5 >It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                    </div>
                </div>
                <div className="row text-center text-black">
                    {SMALL_BUSINESSE.map(item => (
                        <div className="col-12 col-md-4 mb-3" key={item.name}>
                            <div className="bg-white pt-5 pb-5 pl-4 pr-3">
                                <img src={item.logo} alt={item.name} className="mb-5" />
                                <h5 className={smallBusinessStyle.card_heading}>{item.name}</h5>
                                <div className={smallBusinessStyle.card_text}>{item.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <section className="bg-white">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2 className={smallBusinessStyle.heading}>Get started with your website for the
                            new way of working</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h5 className={smallBusinessStyle.h5_subtext}></h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                        <div className="col-md-9 text-center">
                            <img src={ECORMMERCE_WORKING_IMG} alt="Ecommerce_new_way_of_working_icon" className={smallBusinessStyle.ecommerce_image} />
                        </div>
                    </div>
                </div>
            </section>
            <RoadMap type="BLUE" ROAD_MAP_DATA={ROAD_MAP_DATA}/>

        </section>
    )
}

export default SmallBusiness