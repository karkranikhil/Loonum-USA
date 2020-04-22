
import React from "react"
import HomeProductStyle from './HomeProductSection.module.scss'
import WEBSITE_IMAGE from '../../images/Home_Page/website.png'
import DASHBOARD_IMAGE from '../../images/Home_Page/dashboard.png'
import INVENTORY_IMAGE from '../../images/Home_Page/inventory.png'
const CARD_DETAILS = [
    {
        name: 'Website',
        image: WEBSITE_IMAGE,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
    },
    {
        name: 'Dashboard',
        image: DASHBOARD_IMAGE,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
    },
    {
        name: 'Inventory',
        image: INVENTORY_IMAGE,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
    }
]
const HomeProductSection = () => {
    return (
        <section className={HomeProductStyle.section_wrapper}>
            <div className="container text-center pt-5 pb-5">
                <h2 className={HomeProductStyle.heading}>Simple and easy to use experience </h2>
                <div className={HomeProductStyle.subheading}>three products system interaction for your peace of mind</div>
                <div className="row">
                    {CARD_DETAILS.map(item => (
                        <div className="col-4" key={item.name}>
                            <div className="bg-white p-3">
                            <div className={HomeProductStyle.card_heading}>{item.name}</div>
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