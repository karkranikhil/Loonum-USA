
import React from "react"
import './hero.scss'
import Image from '../Image/image'
const Hero = ({ HERO_HEADING, HERO_SUBHEADING, HERO_IMAGE, PARAGRAPH, PAGE }) => {
    console.log(HERO_IMAGE)
    return (
        <>
            <div className={`hero_container container-fluid ${PAGE === 'HOME' ? 'heroImg_Wrapper' : PAGE === 'GREY' ? 'grey_page_wrapper' : 'white_page_wrapper'}`}>
                <div className="container d-flex h-100 justify-content-between">
                    <div className="row pb-3">
                        <div className="col-12 col-lg-6">
                            <div>
                                <div className={`ralewayLight text-center text-md-left ${PAGE === 'HOME' ? 'hero_heading' : 'page_hero_heading'}`}>{HERO_HEADING}</div>
                                <div className="ralewayLight hero_subheading text-center text-md-left">{HERO_SUBHEADING}</div>
                                {PARAGRAPH && <div className="ralewayLight hero_subheading mt-4 text-center text-md-left">{PARAGRAPH}</div>}
                            </div>
                        </div>
                        <div className="d-none d-md-block col-lg-6 text-md-center text-lg-right">
                            <div className="row">
                                <div className="col-10 ml-auto">
                                    <Image filename={HERO_IMAGE} alt="hero image" className="responsive hero_img" />
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