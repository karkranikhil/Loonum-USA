
import React, { useState, useRef } from "react"
// import addToMailchimp from 'gatsby-plugin-mailchimp'
import axios from "axios"
import * as qs from "query-string"
import Modal from '../Modal/index'
import contactFormStyle from './contactForm.module.scss'
const PRIVACY_TEXT = 'By checking the box on this form, you’re consenting to receive emails from Loonum about our services, and products, and other updates. Loonum will not share your details with third-parties. If you no longer wish to receive emails from Loonum click the unsubscribe link in the email. Privacy Policy | GDPR'
const FORM_DATA = {
    "form-name": "contact",
    title: 'Request for Get in touch',
    // first_name: '',
    // last_name: '',
    full_name:'',
    // company: '',
    // job_title: '',
    email: '',
    phone: '',
    // country: '',
    // businesstype: '',
    description: '',
    privacyAccepted: true
}
const ContactUsDescription = (TYPE) => {
    return (<div className={`${contactFormStyle.get_intouch_width}`}>
        <h2 className={`${contactFormStyle.heading}`}> {TYPE.TYPE === 'CONTACT' ? 'Go ahead and talk to us' : TYPE.TYPE === 'IDEA' ? 'We can help you to achieve more' :'Get in touch'}</h2>
        <h3 className={`${contactFormStyle.email} pb-3`}><strong>Hello@loonum.com</strong></h3>
        <p className={`${contactFormStyle.minheading}`}>Tell us about your project</p>
        <p className={`${contactFormStyle.subheading} pb-3`}>We want to know more about how we can help?</p>
        <div>
            {TYPE !== 'IDEA' &&
                <div className={`${contactFormStyle.subheading} pb-3 mb-2`}>Tell us about what you are working on. is it web app application redesign or starting from scratch, ongoing product design, UX audit, design roadmap, design a strategy or something else?</div>
            }
            
            {/* <div className={`${contactFormStyle.subheading} pb-3`}>- Donna</div> */}
        </div>
    </div>)
}

const ContactForm = ({ color, TYPE, url }) => {
    const [formData, setFormData] = useState(FORM_DATA)
    const [showModal, setModal] = useState(false)
    const formRef = useRef(null)
    // const _handleSubmit = e => {
    //     e.preventDefault();
    //     let email = formData.email
    //     let listFields = {
    //         ...formData
    //     }
    //     addToMailchimp(email, listFields) // listFields are optional if you are only capturing the email address.
    //         .then(data => {
    //             // I recommend setting data to React state
    //             // but you can do whatever you want (including ignoring this `then()` altogether)
    //             console.log(data)
    //         })
    //         .catch(() => {
    //             // unnecessary because Mailchimp only ever
    //             // returns a 200 status code
    //             // see below for how to handle errors
    //         })
    // }
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
        <section className={color === 'WHITE' ? "bg-white" : ''}>
            <div className={`${contactFormStyle.wrapper} ${contactFormStyle.padding_tb_62px} container text-center`}>
                <div className="row">
                    <div className={`col-12 col-lg-6 ${contactFormStyle.get_in_touch_wrapper}`}>
                        <ContactUsDescription TYPE={TYPE}/>
                    </div>
                    <div className="col-12  col-lg-6 mt-3 mt-sm-none">
                        <form ref={formRef}  data-netlify="true"
                            data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="full_name" placeholder="What is your name?" name="full_name" value={formData.full_name} onChange={formHandler} required aria-labelledby="Full Name"/>
                                </div>
                                {/* <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="first_name" placeholder="First Name" name="first_name" value={formData.first_name} onChange={formHandler} required aria-labelledby="First Name"/>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="last_name" placeholder="Last Name" name="last_name" value={formData.last_name} onChange={formHandler} required aria-labelledby="Last Name"/>
                                </div> */}
                            </div>
                            {/* <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="company" placeholder="Company" name="company" value={formData.company} onChange={formHandler} aria-labelledby="Company" />
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="job_title" placeholder="Job title" name="job_title" value={formData.job_title} onChange={formHandler} aria-labelledby="Job title"/>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <input type="email" className={contactFormStyle.loonum_form_control} id="email" placeholder="What is your email address?" name="email" value={formData.email} onChange={formHandler} required aria-labelledby="Email Address"/>
                                </div>
                                {/* <div className="col-12 col-sm-6 mb-3">
                                    <input type="email" className={contactFormStyle.loonum_form_control} id="email" placeholder="Work email" name="email" value={formData.email} onChange={formHandler} required aria-labelledby="Work email"/>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="phone" placeholder="Phone" name="phone" value={formData.phone} onChange={formHandler} required 
                                        aria-labelledby="Phone"/>
                                </div> */}
                            </div>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="phone" placeholder="What is your phone number?" name="phone" value={formData.phone} onChange={formHandler} required 
                                        aria-labelledby="Phone"/>
                                </div>
                                {/* <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="country" placeholder="Country" name="country" value={formData.country} onChange={formHandler} aria-labelledby="Country"/>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="businesstype" placeholder="Business type or Industry" name="businesstype" value={formData.businesstype} onChange={formHandler} aria-labelledby="Business type or Industry"/>
                                </div> */}
                            </div>

                            <div className="row">
                                <div className="col mb-3">
                                    <textarea className={contactFormStyle.loonum_form_control} rows="5" id="description" placeholder="Tell us what you are working on..." name="description" value={formData.description} onChange={formHandler} aria-labelledby="How can we help you"/>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className={`col ${contactFormStyle.privacy_text}`}>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck" name="privacyAccepted" checked={formData.privacyAccepted} value={formData.privacyAccepted} onChange={formHandler} required aria-labelledby="privacyAccepted"/>
                                        <label className="custom-control-label" htmlFor="customCheck">{PRIVACY_TEXT}</label>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className={`col ${contactFormStyle.privacy_text}`}>
                                    <button type="submit" className={`btn btn-md mt-3 ${contactFormStyle.submit_btn}`}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {showModal && <Modal closeHandler={closeHandler} />}
        </section>
    )
}

export default ContactForm
