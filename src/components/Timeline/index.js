
import React from "react"
import './timeline.scss'
import ROAD_MAP from '../../images/Products_Page/SVG/loonum road map milestone white.svg'
import ROAD_MAP_GREY from '../../images/Our_Story_Page/SVG/loonum our road map milestone icon grey.svg'
import ARROW_LINE from '../../images/Products_Page/SVG/loonum road map horizontal line with arrow white.svg'
import ARROW_LINE_GREY from '../../images/Our_Story_Page/SVG/loonum road map horizontal line with arrow grey.svg'

const TIME_LINE_DATA = [
    {
        HEADINGS: ['Financial', 'Management'],
        year: '2020',
        description: ['After extensive research, one of the critical findings was that small businesses require customised digital financial support. We are in the design phase of this future product to service our valuable customers.']
    },
    {
        HEADINGS: ['Supply Chain', 'Management'],
        year: '2020',
        description: ['With the disruptive nature of businesses today, the supply chain has always been a challenging industry. Loonum is on the verge of innovating a product to be integrated with our inventory management system.']
    },
    {
        HEADINGS: ['Collaborative', 'Tools'],
        year: '2021',
        description: ["At Loonum innovation lab, we are designing a product to support remote learning & WFA (work from anywhere). We haven't forgotten AR & VR, so be on alert to see what's coming out"]
    },
    {
        HEADINGS: ['Loonum', 'Labs'],
        year: '2021 Beyond',
        description: ['Global Village', 'IoT', 'AI', 'Sustainable Digitisation', 'Digital Mindfulness']
    }
]
const Timeline = ({ Type }) => {
    return (
        <>
            <div className={`container-fluid d-none d-md-flex ${Type === 'BLUE' ? 'timeline_wrapper' : 'timeline_grey_wrapper'}`}>
                <div className="d-flex h-100 justify-content-between">
                    <div className="row">
                        {Type === 'BLUE' ? <img src={ARROW_LINE} alt="line" className="responsive" /> :
                            <img src={ARROW_LINE_GREY} alt="line" className="responsive" />}

                        {TIME_LINE_DATA.map((item, index) => (
                            <div className="col-md-3  border_dash text-center" key={index}>
                                <div className="icon_roadmap" >
                                    <div className="heading_text">
                                        {item.HEADINGS.map(i => <div key={i}>{i}</div>)}
                                    </div>
                                    <img src={Type === 'BLUE' ? ROAD_MAP : ROAD_MAP_GREY} alt="milestone" />
                                </div>

                                <div className="col-12 pt-5">
                                    <div className="year">{item.year}</div>
                                    <div className="pt-4">
                                        {item.description.map(i => <div key={i}>{i}</div>)}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`container-fluid  d-md-none p-relative  ${Type === 'BLUE' ? `mobile_arrow_img timeline_wrapper_mobile` : `mobile_arrow_img_grey timeline_wrapper_grey`}`}>
                <div className="d-flex h-100 justify-content-between">
                    <div className="row p-relative">
                        {TIME_LINE_DATA.map((item, index) =>
                            <div key={index} className="text-center w-100 mt-5">
                                <div className="row">
                                    <div className="col-1  p-relative">
                                    </div>
                                    <div className="col-11">
                                        <div className="ml-auto" >
                                            <div className="heading_text mb-3">
                                                {item.HEADINGS.map(i => <div key={i}>{i}</div>)}
                                            </div>
                                            <img src={Type === 'BLUE' ? ROAD_MAP : ROAD_MAP_GREY} alt="milestone" className="mobile_circle" />
                                        </div>
                                        <div className="ml-auto">
                                            <div className="year_mobile">{item.year}</div>
                                            <div className="pt-4">
                                                {item.description.map(i => <div key={i}>{i}</div>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </div >
        </>
    )
}

export default Timeline


