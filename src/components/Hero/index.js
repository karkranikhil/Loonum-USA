
import React from "react"
import './hero.scss'

const Hero = ({ HERO_HEADING, HERO_SUBHEADING, HERO_IMAGE }) => {
    return (
        <>
            <div className="container-fluid heroImg_Wrapper">
                <div className="container d-flex h-100 justify-content-between">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-5">
                            <div className="gothamLight hero_heading">{HERO_HEADING}</div>
                            <div className="gothamBook hero_subheading mt-4">{HERO_SUBHEADING}</div>
                        </div>
                        <div className="d-none d-md-block col-lg-7 text-md-center text-lg-right">
                            <img src={HERO_IMAGE} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero