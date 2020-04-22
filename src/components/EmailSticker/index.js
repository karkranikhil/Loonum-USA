
import React from "react"
import EmailStickerStyle from './emailSticker.module.scss'
const EmailSticker = () => {
    return (
        <div className={EmailStickerStyle.sticker}>
            <div className={EmailStickerStyle.emailtext}>Just send your email address we will reach out to you</div>
            <input type="text" placeholder="type your email address" className={EmailStickerStyle.inputbox}/>
            <div className={EmailStickerStyle.send_btn}>Send</div>
        </div>
    )
}

export default EmailSticker