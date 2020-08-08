

import React from "react"
import RoadMapStyle from './roadmap.module.scss'

import Timeline from '../Timeline/index'

const RoadMap = (props) => {
    return (
        <section className={props.type === 'BLUE' ? RoadMapStyle.blue_wrapper : RoadMapStyle.grey_wrapper}>
            <div className={`container ${RoadMapStyle.roadmap_wrapper_padding} ${props.type === 'BLUE' ? RoadMapStyle.image_cover : RoadMapStyle.image_cover_grey}`}>
                <div className="row">
                    <div className="col text-center">
                        <h2 className={`${RoadMapStyle.roadmap_heading}`}>Our Roadmap - Planning Loonum into the Future</h2>
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
                        <h5 className={RoadMapStyle.roadmap_subtext}>All businesses should have a plan to follow as they lead the charge in their field. This is Loonum’s plan, will you come along for the journey?</h5>
                    </div>
                </div>
                <Timeline Type={props.type} />
            </div>
        </section>
    )
}

export default RoadMap