
import React, { useState, useRef } from "react"
import axios from "axios"
import * as qs from "query-string"
import './emailSticker.scss'

const EmailSticker = ({ BTN_TEXT, PLACHOLDER, MESSAGE, STICKY_WHITE_CROSS, STICKY_GREY_CROSS, SUCCESS_MESSAGE, emailStickerHandler }) => {
    const [formState, setFormState] = useState('')
    const [isSuccess, setSuccess] = useState(false)

    const changeHandler = (e) => {
        setFormState(e.target.value)
    }
    const closeHandler = (e) => {
        emailStickerHandler()
    }
    const formRef = useRef(null)
    const handleSubmit = (event) => {
        let formData = {
            "form-name": "Sticky Email",
            title: 'Request for Get in touch',
            email: formState
        }
        let url = null
        if (typeof window !== 'undefined') {
            url = window.location.pathname
        }
        event.preventDefault()
        const axiosOptions = {
            url: url || formRef.current.action,
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: qs.stringify(formData),
        }
        axios(axiosOptions)
            .then(response => {
                formRef.current.reset()
                console.log("success", response)
                setSuccess(true)
            })
            .catch(err =>
                console.log("error", err)
            )
    }
    return (
        <React.Fragment>
            {<div className={`d-none d-lg-flex sticker ${isSuccess ? 'success_sticky' : 'new_sticky'}`}>
                {!isSuccess ? <div className="d-flex justify-content-between w-100">
                    <div className="container_wrapper m-auto">
                        <div className="emailtext">{MESSAGE}</div>
                        <form ref={formRef} data-netlify="true"
                            data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                            <input type="hidden" name="form-name" value="Sticky Email" />
                            <input type="email" required={true} placeholder={PLACHOLDER} className="inputbox" value={formState} onChange={changeHandler} aria-labelledby="Email box"/>
                            <button type="submit" className="send_btn">{BTN_TEXT}</button>
                        </form>
                    </div>
                    <div>
                        <img src={STICKY_GREY_CROSS} alt="close" onClick={closeHandler} />
                    </div>

                </div> : <div className="d-flex justify-content-between w-100">
                        <div className="m-auto">{SUCCESS_MESSAGE}</div>
                        <div><img src={STICKY_WHITE_CROSS} alt="close" onClick={closeHandler} /></div>
                    </div>}
            </div>}
        </React.Fragment>
    )
}



export default EmailSticker