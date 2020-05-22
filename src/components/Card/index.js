import React from "react"
import './card.scss'
const Card = ({ data }) => {
    return (
        <div className="row text-center text-black">
            {data.map(item => (
                <div className="col-12 col-md-4 mb-3" key={item.name}>
                    <div className="bg-white pt-5 pb-5 pl-4 pr-3 card_border h-100">
                        <img src={item.logo} alt={item.name} className="mb-5" />
                        <h5 className="card_heading">{item.name}</h5>
                        <div className="card_text">{item.text}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card