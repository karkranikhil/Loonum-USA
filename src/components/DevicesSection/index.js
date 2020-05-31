
import React from "react"
import './devicesSection.scss'
import Image from '../Image/image'
const DevicesSection = ({ HEADING, SUB_HEADING, PARAGRAPH, DEVICE_SECTION_MOBILE, DEVICE_SECTION_WEB }) => {
    return (
        <section className="device_wrapper">
            <div className="container text-center padding-tb-64 pl-3 pr-3">
                <h2 className="heading vertical_center">{HEADING}</h2>
                <div className="subheading d-none d-lg-block">
                    <div>{SUB_HEADING.One}</div>
                    <div>{SUB_HEADING.Two}</div>
                </div>
                <div className="subheading d-bloc d-lg-none">
                    <div>{SUB_HEADING.One} {SUB_HEADING.Two}</div>
                </div>
                <div className="col-12 text-center">
                    <Image filename={DEVICE_SECTION_WEB} alt="DEVICE_IMG" className="imagestyle imagestyle_web d-none d-lg-block m-auto"/>
                    <Image filename={DEVICE_SECTION_MOBILE} alt="DEVICE_IMG_mobile" className="imagestyle d-block d-lg-none m-auto"/>
                </div>
                <div className="paragraph">{PARAGRAPH}</div>
            </div>
        </section>
    )
}

export default DevicesSection