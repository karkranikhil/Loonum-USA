
import React, { useState } from "react"
import EmailStickerStyle from './emailSticker.module.scss'
const EmailSticker = () => {
    const [formState, setFormState] = useState('')
    const changeHandler = (e) => {
        setFormState(e.target.value)
    }
    return (
        <div className={EmailStickerStyle.sticker}>
            <div className={EmailStickerStyle.emailtext}>Just send your email address we will reach out to you</div>
            <input type="text" placeholder="type your email address" className={EmailStickerStyle.inputbox} value={formState} onChange={changeHandler} />
            <button className={EmailStickerStyle.send_btn}>Send</button>
        </div>
    )
}

export default EmailSticker