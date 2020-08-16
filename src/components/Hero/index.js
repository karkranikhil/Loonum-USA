
import React from "react"
import './hero.scss'
import Image from '../Image/image'
const Hero = ({ HERO_HEADING, HERO_SUBHEADING, HERO_IMAGE, PARAGRAPH, PAGE }) => {
    console.log(HERO_IMAGE)
    return (
        <>
            <div className={`hero_container container-fluid ${PAGE === 'HOME' ? 'heroImg_Wrapper' : PAGE === 'GREY' ? 'grey_page_wrapper' : 'white_page_wrapper'}`}>
                <div className="container d-flex h-100 justify-content-between pl-0 pr-0">
                    <div className="d-flex pb-3 w-100">
                        <div className="col-12 col-lg-6 pb-3 m-auto">
                            <div>
                                <h1 className={`ralewayLight letter1px text-center text-lg-left margin-auto-small justify-content-auto-small ${PAGE === 'HOME' ? 'hero_heading' : 'page_hero_heading'}`}>{HERO_HEADING}</h1>
                                <div className={`ralewayLight  text-center text-lg-left margin-auto-small  ${PAGE === 'GREY' ? 'hero_subheading-grey' : PAGE === 'PRODUCT' ? 'hero_subheading-product' : 'hero_subheading'}`}>{HERO_SUBHEADING}</div>
                                {PARAGRAPH && <div className={`ralewayLight mt-4 text-center text-lg-left  margin-auto-small ${PAGE === 'GREY' ? 'hero_subheading-grey' : 'hero_subheading'}`}>{PARAGRAPH}</div>}
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-lg-6 text-md-center text-lg-right pb-3">
                            <div className="row h-100">
                                <div className="col-10 m-auto  p-3 p-lg-auto">
                                    <Image filename={HERO_IMAGE} alt="hero image" className={`responsive ${PAGE === 'HOME' ? 'hero_img' :'hero_img_scale'}`}/>
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