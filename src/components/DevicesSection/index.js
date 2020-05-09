
import React from "react"
import DevicesStyle from './devicesSection.module.scss'
const DevicesSection = ({ HEADING, SUB_HEADING, PARAGRAPH, IMAGE }) => {
    return (
        <section className={DevicesStyle.wrapper}>
            <div className="container text-center pt-5 pb-5 pl-3 pr-3">
                <h2 className={DevicesStyle.heading}>{HEADING}</h2>
                <div className={DevicesStyle.subheading}>{SUB_HEADING}</div>
                <img src={IMAGE} alt="DEVICE_IMG" className={DevicesStyle.imagestyle}/>
                <div className={DevicesStyle.paragraph}>{PARAGRAPH}</div>
            </div>
        </section>
    )
}

export default DevicesSection