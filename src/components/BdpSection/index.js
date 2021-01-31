
import React from "react"
import './bdpSection.scss'
const BdpSection = ({ HEADING, PARAGRAPH }) => {
    return (
        <section className='bdp_section'>
            <div className="container text-center padding-tb-96 pl-3 pr-3">
                <h2 className='heading letter1px'>{HEADING}</h2>
                <div className='paragraph'>{PARAGRAPH}</div>
            </div>
        </section>
    )
}

export default BdpSection


