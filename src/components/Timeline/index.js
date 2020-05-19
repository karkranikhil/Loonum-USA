
import React from "react"
import './Timeline.scss'
import ROAD_MAP from '../../images/Products_Page/ROAD_MAP.png'
import ARROW_LINE from '../../images/Products_Page/ARROW_LINE.svg'

const TIME_LINE_DATA = [
    {
        HEADINGS: ['Fianancial', 'Management'],
        year: '2020',
        description: ['After an extensive research, one of the key finndings was small businesses require customised digital financial support. We are in design pahse of this future product to service our valuble customers.']
    },
    {
        HEADINGS: ['Supply Chain', 'Management'],
        year: '2020',
        description: ['With disruptive nature of businesses today, supply chain always been a challenged industry. Loonum is on the verge of innovating a product to be integrated with our inventory  management system.']
    },
    {
        HEADINGS: ['Collaborative', 'Tools'],
        year: '2021',
        description: ['At Loonum innovation lab, we are designing a product to support remote learning & WFA (work from anywhere). We haven’t forgotton AR & VR, so be on alert to see whats coming out']
    },
    {
        HEADINGS: ['Loonum', 'Labs'],
        year: '2021 Beyonds',
        description: ['Global Village', 'IOT', 'AI', 'Sustainable Digitisation', 'Digital Mindfulness']
    }
]
const Timeline = ({ Type }) => {
    return (
        <>
            <div className={`container-fluid d-none d-md-flex ${Type === 'BLUE' ? 'timeline_wrapper' : 'timeline_grey_wrapper'}`}>
                <div className="d-flex h-100 justify-content-between">
                    <div className="row">
                        <img src={ARROW_LINE} alt="line" className="responsive" />
                        {TIME_LINE_DATA.map(item => (
                            <div className="col-md-3  border_dash text-center">
                                <div className="icon_roadmap" >
                                    <div className="heading_text">
                                        {item.HEADINGS.map(i => <div>{i}</div>)}
                                    </div>
                                    <img src={ROAD_MAP} alt="milestone" />
                                </div>

                                <div className="col-12 pt-5">
                                    <div className="year">{item.year}</div>
                                    <div className="pt-4">
                                        {item.description.map(i => <div>{i}</div>)}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container-fluid timeline_wrapper_mobile d-md-none">
                <div className="d-flex h-100 justify-content-between">
                    <div className="row p-relative">
                        <div className="mobile_arrow_img">
                            <img src={ARROW_LINE} alt="line" className="" width="1300px" />
                        </div>
                        {TIME_LINE_DATA.map((item, index) =>
                            <div key={index} className="text-center w-100 mt-5">
                                <div className="col-10 ml-auto" >
                                    <div className="heading_text mb-3">
                                        {item.HEADINGS.map(i => <div>{i}</div>)}
                                    </div>
                                    <img src={ROAD_MAP} alt="milestone" className="mobile_circle" />
                                </div>
                                <div className="col-10  ml-auto">
                                    <div className="year">{item.year}</div>
                                    <div className="pt-4">
                                        {item.description.map(i => <div>{i}</div>)}
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline