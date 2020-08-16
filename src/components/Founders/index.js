
import React from "react"
import './founders.scss'
import Image from '../Image/image'
const HERO_CARD = ({ lOGO_HEADING, LOGO, SUB_HEADING, DESCRIPTION1, DESCRIPTION2, DESCRIPTION3}) => {
    console.log(LOGO)
    return (
        <>
            <div className="container p-top-bottom-72px foundersWrapper">
                <div className="row pr-3 pl-3">
                    <div className="hero_wrapper">
                        <Image filename={LOGO} alt={lOGO_HEADING} className="img-fluid" />
                        <div className='hero_subheading'>{SUB_HEADING}</div>
                    </div>
                </div>
                <div className="row pr-3 pl-3">
                    <div className="hero_description mt-4">{DESCRIPTION1}</div>
                    <div className="hero_description mt-4">{DESCRIPTION2}</div>
                    <div className="hero_description mt-4">{DESCRIPTION3}</div>
                </div>
            </div>
        </>
    )
}
const FoundersCard = (item) => {
    return (
        <>
            <div className="col-12 col-md-6 pl-5 pr-5 pb-5 max-width-605">
                <div className="founder_wrapper ml-auto mr-auto">
                    <Image filename={item.img} alt={item.firstname} />
                    <div className="ml-sm-4">
                        <div className='firstname'>{item.firstname}</div>
                        <div className='lastname'>{item.lastname}</div>
                        <div className='designation'>{item.designation}</div>
                    </div>
                </div>
                <div className='founder_description'>{item.description1}</div>
                <div className='founder_description mt-4'>{item.description2}</div>
            </div>

        </>
    )
}
const Founders = ({ HERO_DATA, FOUNDER_DATA }) => {
    console.log(FOUNDER_DATA)
    return (
        <>
            <HERO_CARD {...HERO_DATA} />
            <section className='bg-white wrapper foundersWrapper'>
                <div className="container wrapper_padding text-center">
                    <h2 className="cofounder_heading">Co-Founders</h2>
                    <div className="row">
                        {FOUNDER_DATA.map((item, index) => <FoundersCard {...item} key={index} />)}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Founders