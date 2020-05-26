

import React from "react"
import './newWayWorking.scss'
import Image from '../Image/image'
const NewWayWorking = ({ image, heading, description }) => {
    return (
        <section className="section_grey pt-5 pb-5">
            <div className="bg-white container p-5">
                <div className="row mb-3">
                    <div className="col-12 col-lg-7">
                        <h2 className='heading'>{heading}</h2>
                    </div>
                </div>
                <div className="row mobile">
                    <div className="col-lg-3">
                        <h5 className='h5_subtext'>{description}</h5>
                    </div>
                    <div className="col-lg-8 ml-auto text-center image_container">
                        <Image filename={image} alt="Ecommerce_new_way_of_working_icon" className='ecommerce_image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewWayWorking