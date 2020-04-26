
import React from "react"
import contactFormStyle from './contactForm.module.scss'
const PRIVACY_TEXT = 'By checking this box and clicking submit, I hereby consent that Tigerspike sends me via email marketing related information with regard to products and services of Tigerspike. I understand that, in order to opt-out from receiving such emails in the future, I can use the opt-out mechanism that is described in each such email. Privacy Policy | GDPR'
const ContactForm = () => {
    return (
        <section className="bg-white">
            <div className={`${contactFormStyle.wrapper} container text-center pt-5 pb-5`}>
                <div class="row">
                    <div class={`col-12 col-sm-6 ${contactFormStyle.get_in_touch_wrapper}`}>
                        <h2 class={contactFormStyle.heading}>Get in touch</h2>
                        <div>
                            <div class={contactFormStyle.subheading}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 mt-3 mt-sm-none">
                        <form>
                            <div class="row">
                                <div class="col-12 col-sm-6 mb-3">
                                    <input type="text" class="form-control" id="fname" placeholder="First Name" name="fname" />
                                </div>
                                <div class="col-12 col-sm-6 mb-3">
                                    <input type="text" class="form-control" id="lname" placeholder="Last Name" name="lname" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-sm-6 mb-3">
                                    <input type="text" class="form-control" id="company" placeholder="Company" name="company" />
                                </div>
                                <div class="col-12 col-sm-6 mb-3">
                                    <input type="text" class="form-control" id="title" placeholder="Job title" name="title" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-sm-6 mb-3">
                                    <input type="text" class="form-control" id="email" placeholder="Work email" name="email" />
                                </div>
                                <div class="col-12 col-sm-6 mb-3">
                                    <input type="text" class="form-control" id="phone" placeholder="Phone" name="phone" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-sm-6 mb-3">
                                    <input type="text" class="form-control" id="country" placeholder="Country" name="country" />
                                </div>
                                <div class="col-12 col-sm-6 mb-3">
                                    <input type="text" class="form-control" id="businesstype" placeholder="Business type or Industry" name="businesstype" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col mb-3">
                                    <textarea class='form-control' rows="5" id="description" placeholder="How can we help you" name="description" />
                                </div>
                            </div>
                            <div class="row">
                                <div class={`col ${contactFormStyle.privacy_text}`}>
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" class="custom-control-input" id="customCheck" name="example1" />
                                        <label class="custom-control-label" for="customCheck">{PRIVACY_TEXT}</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class={`col ${contactFormStyle.privacy_text}`}>
                                    <button type="button" class={`btn btn-md mt-3 ${contactFormStyle.submit_btn}`}>Submit</button>
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