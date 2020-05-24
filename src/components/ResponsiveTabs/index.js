import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './responsiveTabs.scss'
import RIGHT_ARROW from '../../images/Home_Page/RIGHT_ARROW.png'
const ResponsiveTabs = (props) => {
    const sliderRef = useRef(null)
    const next = () => {
        sliderRef.current.slickNext();
    }
    const previous = () => {
        sliderRef.current.slickPrev();
    }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="slider_wrapper">
            <Slider ref={sliderRef} {...settings}>
                {props.children}
            </Slider>
            {/* <button className="button" onClick={previous}>
                <img src={RIGHT_ARROW} alt="right arrow" />
            </button>
            <button className="button" onClick={next}>
                Next
            </button> */}
        </div>
    )
}
export default ResponsiveTabs