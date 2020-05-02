import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ResponsiveTabs = () => {
    const settings = {
        dots: false
    };
    return (
        <div style={{
            padding: '40px',
            background: '#419be0'
        }}>
            <Slider {...settings}>
                <div>
                    <img src="http://placekitten.com/g/400/200" />
                </div>
                <div>
                    <img src="http://placekitten.com/g/400/200" />
                </div>
                <div>
                    <img src="http://placekitten.com/g/400/200" />
                </div>
                <div>
                    <img src="http://placekitten.com/g/400/200" />
                </div>
            </Slider>
        </div>
    )
}
export default ResponsiveTabs