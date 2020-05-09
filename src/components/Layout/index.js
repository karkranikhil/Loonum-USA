import React, { useState } from "react"
import Header from "../Header/index"
import "../../styles/style.scss"
import EmailSticker from '../EmailSticker/index'
import Footer from "../Footer/footer"
import HEADER_DATA from '../../Content/headerPageData'
import HOME_DATA from '../../Content/homePageData'
import FOOTER_DATA from '../../Content/footerPageData'
const Layout = props => {
    const [closeEmailBox, setCloseEmailBox] = useState(false)
    console.log(props)
    const emailStickerHandler = () => {
        setCloseEmailBox(true)
    }
    return (
        <div>
            <Header {...HEADER_DATA.HEADER} />
            <div style={{ marginTop: '90px' }}>
                {props.children}
            </div>
            {/* <div className="d-none d-md-block">
                {props.hideEmail ? null :}
            </div> */}
            {!closeEmailBox && <EmailSticker {...HOME_DATA.STICKY_FOOTER} emailStickerHandler={emailStickerHandler} />}
            <Footer {...FOOTER_DATA} />
        </div>
    )
}

export default Layout