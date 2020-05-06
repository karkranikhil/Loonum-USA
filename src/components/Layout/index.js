import React from "react"
import Header from "../Header/index"
import "../../styles/style.scss"
import EmailSticker from '../EmailSticker/index'
import Footer from "../Footer/footer"
const Layout = props => {
    console.log(props)
    return (
        <div>
            <Header />
            <div style={{ marginTop: '90px' }}>
                {props.children}
            </div>
            <div className="d-none d-md-block">
                {props.hideEmail ? null : <EmailSticker />}
            </div>
            <Footer />
        </div>
    )
}

export default Layout