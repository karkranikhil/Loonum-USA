
import React from "react"
import { Link } from "gatsby"
import './helpyougrow.scss'
import Image from '../Image/image'
const HelpYouGrow = ({ HEADING, LIST }) => {
    return (
        <section className='helpyougrow_section bg_white'>
            <div className="container text-center  padding-tb-64 pl-3 pr-3">
                <h2 className='heading letter1px pt-3 pb-3'>{HEADING}</h2>
                <div className="row pt-5">
                    {LIST.map(item=>{
                        return(<Link to={item.url} aria-label={item.name} state={{ tabLabel: item.state }} className="col-6 col-md-4 col-lg-3 text-center pb-3 pb-md-4 pb-lg-5" key={item.label}>
                            <Image filename={item.image} alt={`Image ${item.label}`} className="imageStyle"/>
                            <div className="imageSubtext pt-3 pb-3">{item.label}</div>
                        </Link>)
                    })}
                </div>
            </div>
        </section>
    )
}

export default HelpYouGrow