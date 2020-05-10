
import React from "react"
import './devicesSection.scss'

const DevicesSection = ({ HEADING, SUB_HEADING, PARAGRAPH, DEVICE_SECTION_MOBILE, DEVICE_SECTION_WEB }) => {
    return (
        <section className="device_wrapper">
            <div className="container text-center pt-5 pb-5 pl-3 pr-3">
                <h2 className="heading mb-3">{HEADING}</h2>
                <div className="subheading">{SUB_HEADING}</div>
                <div className="col-12 text-center">
                    <img src={DEVICE_SECTION_WEB} alt="DEVICE_IMG" className="imagestyle d-none d-lg-block m-auto" />
                    <img src={DEVICE_SECTION_MOBILE} alt="DEVICE_IMG" className="imagestyle d-block d-lg-none m-auto" />
                </div>
                <div className="paragraph">{PARAGRAPH}</div>
            </div>
        </section>
    )
}

export default DevicesSection