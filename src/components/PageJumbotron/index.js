

import React from "react"
import pageJumboStyle from './pageJumbotron.module.scss'


const PageJumbotron = ({ icon, heading, subtext }) => {
    return (
        <div className={`container ${pageJumboStyle.wrapper}`}>
            {icon && <div className="row pb-5">
                <div className="col text-center">
                    <img src={icon} alt="page logo" />
                </div>
            </div>}
            <div className="row">
                <div className="col text-center">
                    <h2 className={pageJumboStyle.page_heading}>{heading}</h2>
                </div>
            </div>
            <div className={`row ${pageJumboStyle.page_sub_heading}`}>
                <div className="col mt-4 text-center">
                    <h5>{subtext}</h5>
                </div>
            </div>
        </div>
    )
}

export default PageJumbotron