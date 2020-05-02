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
            <div style={{ marginTop: '120px' }}>
                {props.children}
            </div>
            {window.location.pathname.includes('location') ? null : <EmailSticker />}

            <Footer />
        </div>
    )
}

export default Layout