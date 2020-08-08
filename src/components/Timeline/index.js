
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
        description: ['A common problem for many businesses is that they require customized digital financial support. At Loonum we’re developing new ways to enhance your financial management, with plans to deploy it in 2020 it will be ready to integrate with all our existing software platforms.']
    },
    {
        HEADINGS: ['Logistics', 'Management'],
        year: '2020',
        description: ['Understanding your supply chain is key to the just in time (JIT) stock approach. However, keeping track of everything can be a tough task. Loonum is developing an innovative product, so you know what is happening every step of the way.']
    },
    {
        HEADINGS: ['Collaborative', 'Tools'],
        year: '2021',
        description: ["We are designing a product that supports remote learning & work from anywhere (WFA). If your business is able to tap the global talent pool the sky is your limit!"]
    },
    {
        HEADINGS: ['Loonum', 'Labs'],
        year: '2021 & Beyond',
        description: ['Loonum is excited to see what the future brings. It may contain interesting developments such as drone harvesting, automated package delivery, VR shop fronts, is your business future proof?']
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


