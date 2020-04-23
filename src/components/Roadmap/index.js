

import React from "react"
import RoadMapStyle from './roadMap.module.scss'
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
const RoadMap = (props) => {
    const { ROAD_MAP_DATA } = props
    return (
        <section className={props.type === 'BLUE' ? RoadMapStyle.blue_wrapper : RoadMapStyle.grey_wrapper}>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col text-center">
                        <h2 className={`mt-4 mb-4 ${RoadMapStyle.roadmap_heading}`}>Our Roadmap</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2 className={`mb-4 ${RoadMapStyle.roadmap_subheading}`}>
                            Plug and play with other products
                            </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 className={RoadMapStyle.roadmap_subtext}>Our roadmap is to make life easy for you to integrate with our other products, so you can grow your business without any digitial challenges</h5>
                    </div>
                </div>
                <div className="row text-center mt-3">
                    {ROAD_MAP_DATA.map(item => (
                        <div className="col-12 col-md-4 mb-3" key={item.name}>
                            <div className="pt-5 pb-5 pl-4 pr-3">
                                <img src={item.logo} alt={item.name} className="mb-4" />
                                <h5 className={RoadMapStyle.roadmap_card_heading}>{item.name}</h5>
                                <div className={RoadMapStyle.roadmap_card_subheading}>{item.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RoadMap