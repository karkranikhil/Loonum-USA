
import React, { useState, useRef } from "react"
// import addToMailchimp from 'gatsby-plugin-mailchimp'
import axios from "axios"
import * as qs from "query-string"
import contactFormStyle from './contactForm.module.scss'
const PRIVACY_TEXT = 'By checking this box and clicking submit, I hereby consent that Loonum sends me via email marketing related information with regard to products and services of Loonum. I understand that, in order to opt-out from receiving such emails in the future, I can use the opt-out mechanism that is described in each such email. Privacy Policy | GDPR'
const FORM_DATA = {
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
const ContactForm = ({ color }) => {
    const [formData, setFormData] = useState(FORM_DATA)
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
        // Do not submit form via HTTP, since we're doing that via XHR request.
        event.preventDefault()
        const axiosOptions = {
            url: formRef.current.action,
            method: "post",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: qs.stringify(formData),
        }
        axios(axiosOptions)
            .then(response => {
                formRef.current.reset()
                console.log("success", response)
            })
            .catch(err =>
                console.log("error", err)
            )
    }
    const formHandler = e => {
        const { name, value } = e.target
        let updatedData = { ...formData, [name]: value }
        setFormData(updatedData)
    }

    return (
        <section className={color === 'WHITE' ? "bg-white" : ''}>
            <div className={`${contactFormStyle.wrapper} container text-center pt-5 pb-5`}>
                <div className="row">
                    <div className={`col-12 col-sm-6 ${contactFormStyle.get_in_touch_wrapper}`}>
                        <h2 className={contactFormStyle.heading}>Get in touch</h2>
                        <div>
                            <div className={contactFormStyle.subheading}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 mt-3 mt-sm-none">
                        <form ref={formRef} name="Contact Form" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                            <input type="hidden" name="bot-field" />
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className="form-control" id="first_name" placeholder="First Name" name="first_name" value={formData.first_name} onChange={formHandler} />
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className="form-control" id="last_name" placeholder="Last Name" name="last_name" value={formData.last_name} onChange={formHandler} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className="form-control" id="company" placeholder="Company" name="company" value={formData.company} onChange={formHandler} />
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className="form-control" id="job_title" placeholder="Job title" name="job_title" value={formData.job_title} onChange={formHandler} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="email" className="form-control" id="email" placeholder="Work email" name="email" value={formData.email} onChange={formHandler} />
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className="form-control" id="phone" placeholder="Phone" name="phone" value={formData.phone} onChange={formHandler} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className="form-control" id="country" placeholder="Country" name="country" value={formData.country} onChange={formHandler} />
                                </div>
                                <div className="col-12 col-sm-6 mb-3">
                                    <input type="text" className="form-control" id="businesstype" placeholder="Business type or Industry" name="businesstype" value={formData.businesstype} onChange={formHandler} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col mb-3">
                                    <textarea className='form-control' rows="5" id="description" placeholder="How can we help you" name="description" value={formData.description} onChange={formHandler} />
                                </div>
                            </div>
                            <div className="row">
                                <div className={`col ${contactFormStyle.privacy_text}`}>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck" name="privacyAccepted" checked={formData.privacyAccepted} onChange={formHandler} />
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
        </section>
    )
}

export default ContactForm