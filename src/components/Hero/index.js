
import React from "react"
import './hero.scss'

const Hero = ({ HERO_HEADING, HERO_SUBHEADING, HERO_IMAGE, PARAGRAPH }) => {
    return (
        <>
            <div className="container-fluid heroImg_Wrapper">
                <div className="container d-flex h-100 justify-content-between">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="gothamLight hero_heading text-center">{HERO_HEADING}</div>
                            <div className="gothamBook hero_subheading mt-4 text-center">{HERO_SUBHEADING}</div>
                            {PARAGRAPH && <div className="gothamBook hero_subheading mt-4">{PARAGRAPH}</div>}
                        </div>
                        <div className="d-none d-md-block col-lg-6 text-md-center text-lg-right">
                            <div className="row">
                                <div className="col-10 m-auto">
                                    <img src={HERO_IMAGE} alt="hero image" className="responsive" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero