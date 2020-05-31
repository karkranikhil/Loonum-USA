
import React from "react"
import HomeProductStyle from './homeProductSection.module.scss'
import Image from '../Image/image'
const HomeProductSection = ({ CARD_DETAILS, HEADING, SUB_HEADING }) => {
    return (
        <section className={HomeProductStyle.section_wrapper}>
            <div className={`container text-center pl-3 pr-3 ${HomeProductStyle.padding_tb_60 }`}>
                <h2 className={HomeProductStyle.heading}>{HEADING}</h2>
                <div className={HomeProductStyle.subheading}>{SUB_HEADING}</div>
                <div className="row">
                    {CARD_DETAILS.map(item => (
                        <div className="col-12 col-md-4 mb-3" key={item.name}>
                            <div className={`bg-white h-100 ${HomeProductStyle.card_spacing}`}>
                                <div className={`gothamBook ${HomeProductStyle.card_heading}`}>{item.name}</div>
                                <Image filename={item.image} alt={item.name} className={HomeProductStyle.card_image} />
                                <div className={HomeProductStyle.card_text}>{item.text}</div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default HomeProductSection