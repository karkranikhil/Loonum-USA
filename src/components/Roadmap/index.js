

import React from "react"
import RoadMapStyle from './roadmap.module.scss'

import Timeline from '../Timeline/index'

const RoadMap = (props) => {
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
            </div>
        </section>
    )
}

export default RoadMap