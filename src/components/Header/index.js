import React, { useState } from "react"
import { Link } from "gatsby"
import headerStyles from './header.module.scss'
import MenuBar from '../MenuBar/index'
const Header = () => {
    const [navbarStatus, setNavbarStatus] = useState(false);
    const toggleHandler =()=>{
        setNavbarStatus(!navbarStatus)
    }
    return (
        <>
            <header>
                <div className={`bg-darkgrey d-flex ${headerStyles.location_bar} ${headerStyles.location}`}>
                    <Link to="/location/">Our Location</Link>
                </div>
                <div className={headerStyles.custom_navbar}>
                    <div className="container">
                        <nav class="navbar navbar-expand-md navbar-dark">
                        <a class="navbar-brand" href="#">Icon</a>
                        <div id="navbar-toggler" class="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={toggleHandler}>
                            <span class="navbar-toggler-icon"></span>
                        </div>
                        <div class={navbarStatus ? "collapse navbar-collapse show": "collapse navbar-collapse"} id="collapsibleNavbar">
                            <ul class="navbar-nav m-auto">
                            <li class="nav-item">
                                <Link to="/products/" className="nav-link" activeClassName={headerStyles.active_menu_item}>PRODUCTS</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/services/" className="nav-link" activeClassName={headerStyles.active_menu_item}>SERVICES</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/idea/" className="nav-link" activeClassName={headerStyles.active_menu_item}>IDEA</Link>
                            </li>  
                            <li class="nav-item">
                                <Link to="/story/" className="nav-link" activeClassName={headerStyles.active_menu_item}>OUR STORY</Link>
                            </li>   
                            </ul>
                        </div>  
                        </nav>
                        {/* <nav className="m-auto">
                            <ul className="menu">
                                <li>
                                    <Link to="/products/" activeClassName={headerStyles.active_menu_item}>PRODUCTS</Link>
                                </li>
                                <li>
                                    <Link to="/services/" activeClassName={headerStyles.active_menu_item}>SERVICES</Link>
                                </li>
                                <li>
                                    <Link to="/idea/" activeClassName={headerStyles.active_menu_item}>A SIMPLE IDEA</Link>
                                </li>

                                <li>
                                    <Link to="/story/" activeClassName={headerStyles.active_menu_item}>OUR STORY</Link>
                                </li>
                            </ul>
                        </nav> */}
                    </div>
                </div>
            </header>
            {/* {productStatus ? <MenuBar /> : null} */}

        </>
    )
}

export default Header