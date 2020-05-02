

import React from "react"
import './newWayWorking.scss'


const NewWayWorking = ({ image, heading, description }) => {
    return (
        <section className="bg-white">
            <div className="container pt-5 pb-5">
                <div className="row mb-3">
                    <div className="col-12 col-md-12">
                        <h2 className='heading'>{heading}</h2>
                    </div>
                </div>
                <div className="row mobile">
                    <div className="col-md-3">
                        <h5 className='h5_subtext'>{description}</h5>
                    </div>
                    <div className="col-md-8 ml-auto text-center">
                        <img src={image} alt="Ecommerce_new_way_of_working_icon" className='ecommerce_image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewWayWorking