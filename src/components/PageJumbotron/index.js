

import React from "react"
import pageJumboStyle from './pageJumbotron.module.scss'


const PageJumbotron = ({ icon, heading, subtext, image }) => {
    return (
        <div className={`container ${pageJumboStyle.wrapper}`}>
            {icon && <div className="row pb-5">
                <div className="col">
                    <img src={icon} alt="page logo" />
                </div>
            </div>}
            <div className="row">
                <div className="col-12 col-lg-12">
                    <h2 className={pageJumboStyle.page_heading}>{heading}</h2>
                </div>
            </div>
            <div className={`row ${pageJumboStyle.page_sub_heading}`}>
                <div className="col">
                    <h5>{subtext}</h5>
                </div>
            </div>
            {image && <div className={`d-none d-lg-block ${pageJumboStyle.img_icon}`} >
                <img src={image} alt="jumbo icon" />
            </div>}
        </div>
    )
}

export default PageJumbotron