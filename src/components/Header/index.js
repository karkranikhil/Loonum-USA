import React, { useState } from "react"
import { Link } from "gatsby"
import LOGO from '../../images/Icons/logo.png'
import './header.scss'
const Header = () => {
    const [navbarStatus, setNavbarStatus] = useState(false);
    const toggleHandler = () => {
        setNavbarStatus(!navbarStatus)
    }
    return (
        <>
            <header>
                <div className='location_bar' >
                    <Link to="/location/" activeClassName='active_menu_item'>Our Location</Link>
                </div>
                <div className='custom_navbar gothamMedium'>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-dark">
                            <Link to="/" className="navbar-brand" >
                                <img src={LOGO} alt="logo" height="30px" />
                            </Link>
                            <div id="navbar-toggler" className="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={toggleHandler}>
                                <span className="navbar-toggler-icon"></span>
                            </div>
                            <div className={navbarStatus ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="collapsibleNavbar">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link to="/products/" className="nav-link" activeClassName='active_menu_item'>PRODUCTS</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/services/" className="nav-link" activeClassName='active_menu_item'>SERVICES</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/idea/" className="nav-link" activeClassName='active_menu_item'>A SIMPLE IDEA</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/story/" className="nav-link" activeClassName='active_menu_item'>OUR STORY</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header