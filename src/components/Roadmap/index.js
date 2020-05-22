

import React from "react"
import RoadMapStyle from './roadmap.module.scss'

import Timeline from '../Timeline/index'

const RoadMap = (props) => {
    const { ROAD_MAP_DATA } = props
    return (
        <section className={props.type === 'BLUE' ? RoadMapStyle.blue_wrapper : RoadMapStyle.grey_wrapper}>
            <div className={`container pt-5 pb-5 ${props.type === 'BLUE' ? RoadMapStyle.image_cover : RoadMapStyle.image_cover_grey}`}>
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
                <Timeline Type={props.type} />
                {/* <div className="row text-center mt-3">
                    {ROAD_MAP_DATA.map(item => (
                        <div className="col-12 col-md-4 mb-3" key={item.name}>
                            <div className="pt-5 pb-5 pl-4 pr-3">
                                <img src={item.logo} alt={item.name} className="mb-4" />
                                <h5 className={RoadMapStyle.roadmap_card_heading}>{item.name}</h5>
                                <div className={RoadMapStyle.roadmap_card_subheading}>{item.text}</div>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    )
}

export default RoadMap