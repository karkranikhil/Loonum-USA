
import React from "react"
import './workWithSection.scss'
import Image from '../Image/image'
const WorkWithSection = ({ HEADING, LIST }) => {
    console.log(LIST)
    return (
        <section className='workwith_section bg_white'>
            <div className="container text-center  padding-tb-64 pl-3 pr-3 ">
                <h2 className='heading letter1px pt-3 pb-3'>{HEADING}</h2>
                <div className="grid-container">
                    {LIST.map(item=>{
                        return(<div className=""  key={item.label}>
                            <Image filename={item.image} alt={`Image ${item.label}`} className="img-responsive imageStyle" />
                        </div>)
                    })}
                </div>
            </div>
        </section>
    )
}

export default WorkWithSection