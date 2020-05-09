
import React from "react"
import './bdpSection.scss'
const BdpSection = ({ HEADING, SUB_HEADING, PARAGRAPH }) => {
    return (
        <section className='bdp_section bg_white'>
            <div className="container text-center pt-5 pb-5 pl-3 pr-3">
                <h2 className='heading'>{HEADING}</h2>
                <div className='subheading'>{SUB_HEADING}</div>
                <div className='paragraph pt-3'>{PARAGRAPH}</div>
            </div>
        </section>
    )
}

export default BdpSection