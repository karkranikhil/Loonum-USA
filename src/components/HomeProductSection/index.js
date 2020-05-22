
import React from "react"
import HomeProductStyle from './homeProductSection.module.scss'
const HomeProductSection = ({ CARD_DETAILS, HEADING, SUB_HEADING }) => {
    return (
        <section className={HomeProductStyle.section_wrapper}>
            <div className="container text-center pt-5 pb-5 pl-3 pr-3">
                <h2 className={HomeProductStyle.heading}>{HEADING}</h2>
                <div className={HomeProductStyle.subheading}>{SUB_HEADING}</div>
                <div className="row">
                    {CARD_DETAILS.map(item => (
                        <div className="col-12 col-md-4 mb-3" key={item.name}>
                            <div className="bg-white p-3 h-100">
                                <div className={`gothamBook ${HomeProductStyle.card_heading}`}>{item.name}</div>
                                <img src={item.image} alt={item.name} />
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