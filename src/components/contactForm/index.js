
import React, { useState, useRef } from "react"
// import addToMailchimp from 'gatsby-plugin-mailchimp'
import axios from "axios"
import * as qs from "query-string"
import Modal from '../Modal/index'
import contactFormStyle from './contactForm.module.scss'
const PRIVACY_TEXT = 'By checking this box and clicking submit, I hereby consent that Loonum sends me via email marketing related information with regard to products and services of Loonum. I understand that, in order to opt-out from receiving such emails in the future, I can use the opt-out mechanism that is described in each such email. Privacy Policy | GDPR'
const FORM_DATA = {
    "form-name": "contact",
    title: 'Request for Get in touch',
    first_name: '',
    last_name: '',
    company: '',
    job_title: '',
    email: '',
    phone: '',
    country: '',
    businesstype: '',
    description: '',
    privacyAccepted: false
}
const ContactUsDescription = (TYPE) => {
    console.log("TYPE", TYPE)
    return (<div className={`${contactFormStyle.get_intouch_width}`}>
        <h2 className={`${contactFormStyle.heading} pb-3 mb-2`}> {TYPE.TYPE === 'CONTACT' ? 'Go ahead and talk to us' : TYPE.TYPE === 'IDEA' ? 'We can help you to achieve more' :'Get in touch'}</h2>
        <div>
            {TYPE !== 'IDEA' &&
                <div className={`${contactFormStyle.subheading} pb-3 mb-2`}>Want to know more about <br/>how we can help? Have a question?</div>
            }
            
            <div className={`${contactFormStyle.subheading} pb-3 mb-2`}>Simply fill in the form and I will get <br/> back to you within 24 hrs.</div>
            <div className={`${contactFormStyle.subheading} pb-3`}>- Donna</div>
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
                console.log("success", response)
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
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="first_name" placeholder="First Name" name="first_name" value={formData.first_name} onChange={formHandler} required aria-labelledby="First Name"/>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="last_name" placeholder="Last Name" name="last_name" value={formData.last_name} onChange={formHandler} required aria-labelledby="Last Name"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="company" placeholder="Company" name="company" value={formData.company} onChange={formHandler} aria-labelledby="Company" />
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="job_title" placeholder="Job title" name="job_title" value={formData.job_title} onChange={formHandler} aria-labelledby="Job title"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="email" className={contactFormStyle.loonum_form_control} id="email" placeholder="Work email" name="email" value={formData.email} onChange={formHandler} required aria-labelledby="Work email"/>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="phone" placeholder="Phone" name="phone" value={formData.phone} onChange={formHandler} required 
                                        aria-labelledby="Phone"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="country" placeholder="Country" name="country" value={formData.country} onChange={formHandler} aria-labelledby="Country"/>
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className={contactFormStyle.loonum_form_control} id="businesstype" placeholder="Business type or Industry" name="businesstype" value={formData.businesstype} onChange={formHandler} aria-labelledby="Business type or Industry"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col mb-3">
                                    <textarea className={contactFormStyle.loonum_form_control} rows="5" id="description" placeholder="How can we help you" name="description" value={formData.description} onChange={formHandler} aria-labelledby="How can we help you"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className={`col ${contactFormStyle.privacy_text}`}>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck" name="privacyAccepted" checked={formData.privacyAccepted} value={formData.privacyAccepted} onChange={formHandler} required aria-labelledby="privacyAccepted"/>
                                        <label className="custom-control-label" htmlFor="customCheck">{PRIVACY_TEXT}</label>
                                    </div>
                                </div>
                            </div>
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