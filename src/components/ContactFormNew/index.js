
import React, { useState, useRef } from "react"
// import addToMailchimp from 'gatsby-plugin-mailchimp'
import axios from "axios"
import * as qs from "query-string"
import Modal from '../Modal/index'
import contactFormStyle from './contactFormNew.module.scss'
const FORM_DATA = {
    "form-name": "loonumusa",
    title: 'Request for Get in touch',
    full_name:'',
    email: '',
    phone: '',
    description: '',
    privacyAccepted: true
}
const ContactUsDescription = (TYPE) => {
    return (<div className={`${contactFormStyle.get_intouch_width}`}>
        <h2 className={`${contactFormStyle.heading} mb-3`}>Tell us about your project</h2>
        <p className={`${contactFormStyle.subheading} pb-3`}>We want to know more about how we can help?</p>
        <div className={`${contactFormStyle.subheading} pb-3 mb-2`}>Tell us about what you are working on. is it web app application redesign or starting from scratch, ongoing product design, UX audit, design roadmap, design a strategy or something else?</div>
    </div>)
}

const ContactFormNew = ({ color, TYPE, url }) => {
    const [formData, setFormData] = useState(FORM_DATA)
    const [showModal, setModal] = useState(false)
    const formRef = useRef(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        const axiosOptions = {
            url: url || formRef.current.action,
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: qs.stringify(formData),
        }
        axios(axiosOptions)
            .then(response => {
                setFormData(FORM_DATA)
                setModal(true)
            })
            .catch(err =>
                console.log("error", err)
            )
    }
    const formHandler = e => {
        const { name, value, checked } = e.target
        let result = name === 'privacyAccepted' ? checked :value
        let updatedData = { ...formData, [name]: result }
        setFormData(updatedData)
    }
    const closeHandler = e => {
        setModal(false)
    }
    return (
        <section className="bg-white">
            <div className={`${contactFormStyle.wrapper} ${contactFormStyle.padding_tb_62px} container text-center`}>
                <div className="row">
                    <div className={`col-12 col-lg-6 ${contactFormStyle.get_in_touch_wrapper}`}>
                        <ContactUsDescription TYPE={TYPE}/>
                        <form ref={formRef} name="loonumusa" method="post" data-netlify="true" data-netlify-honeypot="bot-field"  onSubmit={handleSubmit}>
                            <input type="hidden" name="form-name" value="loonumusa" />
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="full_name" placeholder="What is your name?" name="full_name" value={formData.full_name} onChange={formHandler} required aria-labelledby="Full Name"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <input type="email" className={contactFormStyle.loonum_form_control} id="email" placeholder="What is your email address?" name="email" value={formData.email} onChange={formHandler} required aria-labelledby="Email Address"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="phone" placeholder="What is your phone number?" name="phone" value={formData.phone} onChange={formHandler} required 
                                        aria-labelledby="Phone"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col mb-3">
                                    <textarea className={contactFormStyle.loonum_form_control} rows="5" id="description" placeholder="Tell us what you are working on..." name="description" value={formData.description} onChange={formHandler} aria-labelledby="How can we help you"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className={`col ${contactFormStyle.privacy_text}`}>
                                    <button type="submit" className={`btn btn-md mt-3 ${contactFormStyle.submit_btn}`}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12  col-lg-6 mt-3 mt-sm-none text-left addressWrapper">
                    <h3 className={`${contactFormStyle.location} mt-5`}>CONTACT LOONUM’S LOS ANGELES OFFICE</h3>
                    <div className={`${contactFormStyle.sansFamily} mt-3`}>
                      <div className={`${contactFormStyle.subheadingAdd}`}>28358 Constellation Road, Unit 600, </div>
                      <div className={`${contactFormStyle.subheadingAdd}`}>Valencia, CA 91355, USA</div>
                      <div><a href="mailto:admin@loonum.com" className={`${contactFormStyle.subheadingAdd}`}>admin@loonum.com</a></div>
                      <div><a href="tel:+1 (661) 749 3778" className={`${contactFormStyle.subheadingAdd}`}>+1 (661) 749 3778</a></div>
                    </div>
                    <h3 className={`${contactFormStyle.location} mt-4 mb-3`}>CONTACT LOONUM’S MELBOURNE OFFICE</h3>
                    <div className={`${contactFormStyle.sansFamily} mt-3 mb-4`} >
                      <div className={`${contactFormStyle.subheadingAdd}`}>507/1228 Nepean Highway, </div>
                      <div className={`${contactFormStyle.subheadingAdd}`}>Cheltenham, VIC 3192</div>
                      <div><a href="mailto:admin@loonum.com.au"  className={`${contactFormStyle.subheadingAdd}`} >hey@loonum.com.au</a></div>
                      <div><a href="tel:+61 432 244 111"  className={`${contactFormStyle.subheadingAdd} mb-3`} >+61 432 244 111</a></div>
                    </div>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.999413182451!2d-118.57751848447403!3d34.45216278049898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c27de0ebd5ea99%3A0x5814a69242b59618!2s28358%20Constellation%20Rd%2C%20Valencia%2C%20CA%2091355%2C%20USA!5e0!3m2!1sen!2sau!4v1657707648026!5m2!1sen!2sau" width="100%" height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  
                    </div>
                </div>
            </div>
            {showModal && <Modal closeHandler={closeHandler} />}
        </section>
    )
}

export default ContactFormNew