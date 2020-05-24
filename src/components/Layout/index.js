import React, { useState, useContext } from "react"
import Header from "../Header/index"
import "../../styles/style.scss"
import EmailSticker from '../EmailSticker/index'
import Footer from "../Footer/footer"
import HEADER_DATA from '../../Content/headerPageData'
import HOME_DATA from '../../Content/homePageData'
import FOOTER_DATA from '../../Content/footerPageData'
import { GlobalDispatchContext, GlobalStateContext } from '../../context/GlobalContextProvider.js'
const Layout = props => {
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)
    const emailStickerHandler = () => {
        dispatch({ type: 'OFF_STICKY_EMAIL', payload: false })
    }
    return (
        <>
            <div>
                <Header {...HEADER_DATA.HEADER} />
                <div style={{ marginTop: '120px' }}>
                    {props.children}
                </div>
                {state.stickyEmail && <EmailSticker {...HOME_DATA.STICKY_FOOTER} emailStickerHandler={emailStickerHandler} />}
                <Footer {...FOOTER_DATA} />
            </div>
        </>
    )
}

export default Layout