import React from "react"
import './card.scss'
import Image from '../Image/image'
const Card = ({ data }) => {
    return (
        <div className="row text-center text-black tab_cards">
            {data.map(item => (
                <div className="col-12 col-md-4 mb-3" key={item.name}>
                    <div className="bg-white card_padding card_border h-100">
                        <div className="reponsive_image_container">
                            <Image filename={item.logo} alt={item.name} className="mb-5 card_image_size" />
                        </div>

                        <h5 className="card_heading">{item.name}</h5>
                        <div className="card_text">{item.text}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card