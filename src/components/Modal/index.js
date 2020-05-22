import React, { useState } from "react"
import "./Modal.scss"
import TWITTER from '../../images/Icons/twitter_blue.png'
import YOUTUBE from '../../images/Icons/youtube_blue.png'
import LINKEDIN from '../../images/Icons/linkedin_blue.png'
import FACEBOOK from '../../images/Icons/facebook_blue.png'
import INSTAGRAM from '../../images/Icons/instagram_blue.svg'
import THANK_YOU_CHARACTER from '../../images/Icons/THANK_YOU_CHARACTER.png'
import CROSS_LARGE from '../../images/Icons/CROSS_LARGE.png'
export const SOCIAL_MEDIA = [
    {
        image: TWITTER,
        Links: '#'
    },
    {
        image: LINKEDIN,
        Links: 'https://www.linkedin.com/company/42815767/admin/'
    },
    {
        image: FACEBOOK,
        Links: 'https://www.facebook.com/Loonum-102425771465986/?modal=admin_todo_tour'
    },
    {
        image: YOUTUBE,
        Links: 'https://www.youtube.com/channel/UC9x_iJEjM2Iu5MOozn8JfXw?view_as=subscriber'
    },
    {
        image: INSTAGRAM,
        Links: '#'
    }
]
const Modal = ({ closeHandler }) => {

    return (
        <div className="modal_wrapper">
            <div className="custom_modal-content">
                <div className="text-right" ><img src={CROSS_LARGE} alt="close modal" onClick={closeHandler} /></div>
                <div className="row">
                    <div className="col-12 col-md-6 vertical_fix">
                        <div className="row msg_heading">
                            <div className="col-12">
                                Thank you !
                        </div>
                        </div>
                        <div className="row msg_subheading">
                            <div className="col-12">
                                We have received your messaged. James will get back to you
                                within 24 hours.
                        </div>
                        </div>
                        <div className="row msg_subheading mb-5">
                            <div className="col-12">
                                Have you checked what have
                                we been doing lately?  follow us on
                        </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-12">
                                {SOCIAL_MEDIA.map((item, index) => <a href={item.Links} className="social_icon" key={index}><img src={item.image} /></a>)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <button className="btn btn-lg done_button" onClick={closeHandler}>Done</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-flex col-md-6 text-center">
                        <img src={THANK_YOU_CHARACTER} alt="THANK_YOU_CHARACTER" className="responsive_img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal