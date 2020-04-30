
import React from "react"
import heroStyles from './hero.module.scss'

const Hero = () => {
    return (
        <>
            <div className={heroStyles.heroImg__Wrapper}>
                <div className={heroStyles.heroImg}></div>
                <div className={heroStyles.heroImg__text_Wrapper}>
                    <div className={heroStyles.heroImg__text_heading_desktop}>Innovate yourself with adaptable products to grow your business.</div>
                    <div className={heroStyles.heroImg__text_description_desktop}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                </div>
            </div>
        </>
    )
}

export default Hero