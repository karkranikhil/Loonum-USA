
import React from "react"
import './hero.scss'
import Image from '../Image/image'
const Hero = ({ HERO_HEADING, HERO_SUBHEADING, HERO_IMAGE, PARAGRAPH, PAGE }) => {
    console.log(HERO_IMAGE)
    return (
        <>
            <div className={`hero_container container-fluid ${PAGE === 'HOME' ? 'heroImg_Wrapper' : PAGE === 'GREY' ? 'grey_page_wrapper' : 'white_page_wrapper'}`}>
                <div className="container d-flex h-100 justify-content-between">
                    <div className="row pb-3 w-100">
                        <div className="col-12 col-lg-6 pb-3">
                            <div>
                                <div className={`ralewayLight letter1px text-center text-lg-left ${PAGE === 'HOME' ? 'hero_heading' : 'page_hero_heading'}`}>{HERO_HEADING}</div>
                                <div className={`ralewayLight  text-center text-lg-left ${PAGE === 'GREY' ? 'hero_subheading-grey' : 'hero_subheading'}`}>{HERO_SUBHEADING}</div>
                                {PARAGRAPH && <div className={`ralewayLight mt-4 text-center text-md-left ${PAGE === 'GREY' ? 'hero_subheading-grey' : 'hero_subheading'}`}>{PARAGRAPH}</div>}
                            </div>
                        </div>
                        <div className="d-none d-md-block col-lg-6 text-md-center text-lg-right pb-3">
                            <div className="row">
                                <div className="col-10 margin-image p-3 p-lg-auto">
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