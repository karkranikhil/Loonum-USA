

import React from "react"
import Card from '../Card/index.js'
import NewWayWorking from '../NewWayWorking/index.js'
import './servicesList.scss'
import ECORMMERCE_WORKING_IMG from '../../images/Products_Page/Ecommerce_new_way_of_working_icon.png'
import Tabs from '../Tabs/index.js'
import Deployment_icon from '../../images/Services_Page/Deployment_icon.png'
import Development_icon from '../../images/Services_Page/Development_icon.png'
import UX_UI_icon from '../../images/Services_Page/UX_UI_icon.png'
const DUMMY_TEXT = "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const NEW_WAY_WORKING_DATA = {
    heading: 'Let us help you to simplify your business challenges so you can serve your customers and increase revenue',
    image: ECORMMERCE_WORKING_IMG,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "

}
const SERVICES_TYPES = [
    {
        logo: UX_UI_icon,
        name: 'UX & UI Design',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        logo: Development_icon,
        name: 'Development',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        logo: Deployment_icon,
        name: 'Deployment',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
]
const ServicesList = () => {
    return (
        <section className='wrapper'>

            <div className="container pt-5 pb-5 mt-5">
                <Tabs>
                    <div label="Consulting">
                        <div className='row page_sub_heading'>
                            <div className="col mt-4 mb-5 text-center">
                                <h5>{DUMMY_TEXT}</h5>
                            </div>
                        </div>
                        <Card data={SERVICES_TYPES} />
                    </div>
                    <div label="Design & Build">
                        <div className='row page_sub_heading'>
                            <div className="col mt-4 mb-5 text-center">
                                <h5>{DUMMY_TEXT}</h5>
                            </div>
                        </div>
                        <Card data={SERVICES_TYPES} />
                    </div>
                    <div label="Digital marketing">
                        <div className='row page_sub_heading'>
                            <div className="col mt-4 mb-5 text-center">
                                <h5>{DUMMY_TEXT}</h5>
                            </div>
                        </div>
                        <Card data={SERVICES_TYPES} />
                    </div>
                    <div label="Support">
                        <div className='row page_sub_heading'>
                            <div className="col mt-4 mb-5 text-center">
                                <h5>{DUMMY_TEXT}</h5>
                            </div>
                        </div>
                        <Card data={SERVICES_TYPES} />
                    </div>
                </Tabs>

            </div>
            <NewWayWorking {...NEW_WAY_WORKING_DATA} />
        </section>
    )
}

export default ServicesList