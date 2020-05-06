import React, { useState } from "react"
import { Link } from "gatsby"
import LOGO from '../../images/Icons/logo.png'
import RIGHT_ARROW from '../../images/Icons/chevron-right.png'
import CLOSE_ICON from '../../images/Icons/close_icon.png'
import './header.scss'
const Header = () => {
    const [navbarStatus, setNavbarStatus] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const toggleHandler = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <header>
                <div className='location_bar' >
                    <Link to="/location/" activeClassName='active_menu_item'>Our Location</Link>
                </div>
                <div className='custom_navbar gothamMedium'>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-dark d-none d-lg-flex">
                            <Link to="/" className="navbar-brand" >
                                <img src={LOGO} alt="logo" height="30px" />
                            </Link>
                            <div className="collapse navbar-collapse m-auto" id="collapsibleNavbar">
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

                        <div class="row mobile_nav_header d-flex d-lg-none">
                            <div className="m-auto">
                                <Link to="/"><img src={LOGO} alt="logo" height="30px" /></Link>
                            </div>
                            {isOpen ? <div>
                                <img src={CLOSE_ICON} alt="logo" height="20px" onClick={toggleHandler} />
                            </div> : <div onClick={toggleHandler}>
                                    <div className="hemburgerIcon"></div>
                                    <div className="hemburgerIcon"></div>
                                    <div className="hemburgerIcon"></div>
                                </div>}
                        </div>
                        {isOpen ? <div>
                            <div className="row mobile_nav_list_wrapper">

                                <Link to="/products/" onClick={toggleHandler}>
                                    <div class="col-12">
                                        <div>PRODUCTS</div>
                                        <div><img src={RIGHT_ARROW} alt="logo" height="20px" />
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/services/" onClick={toggleHandler}> <div class="col-12">
                                    <div>SERVICES</div>
                                    <div><img src={RIGHT_ARROW} alt="logo" height="20px" /></div>
                                </div></Link>


                                <Link to="/idea/" onClick={toggleHandler}> <div class="col-12">
                                    <div>A SIMPLE IDEA</div>
                                    <div><img src={RIGHT_ARROW} alt="logo" height="20px" /></div>
                                </div> </Link>


                                <Link to="/story/" onClick={toggleHandler}><div class="col-12">
                                    <div>OUR STORY</div>
                                    <div><img src={RIGHT_ARROW} alt="logo" height="20px" /></div>
                                </div> </Link>

                            </div>
                        </div> : null}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header