import React from "react"
import Header from "../Header/index"
import "../../styles/style.scss"
import EmailSticker from '../EmailSticker/index'
import Footer from "../Footer/footer"
const Layout = props => {
    return (
        <div>
            <Header />
            {props.children}
            <EmailSticker />
            <Footer/>
        </div>
    )
}

export default Layout