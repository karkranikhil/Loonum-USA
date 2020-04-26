import React from "react"
import cardStyles from './card.module.scss'
const Card = ({ data }) => {
    return (
        <div className="row text-center text-black">
            {data.map(item => (
                <div className="col-12 col-md-4 mb-3" key={item.name}>
                    <div className="bg-white pt-5 pb-5 pl-4 pr-3">
                        <img src={item.logo} alt={item.name} className="mb-5" />
                        <h5 className={cardStyles.card_heading}>{item.name}</h5>
                        <div className={cardStyles.card_text}>{item.text}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card