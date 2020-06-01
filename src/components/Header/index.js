import React, { useState } from "react"
import { Link } from "gatsby"
import './header.scss'
import Image from '../Image/image'
const getNavList = (NAV_LIST) => {
    return NAV_LIST.map(item => <li className="nav-item" key={item.name}>
        <Link to={item.url} className="nav-link" activeClassName='active_menu_item' aria-label={item.name}>{item.name}</Link>
    </li>)
}


const Header = ({ LOGO_MOBILE, LOGO_WEB, NAV_LIST, RIGHT_ARROW, HAMBERGER, CLOSE_ARROW }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleHandler = () => {
        setIsOpen(!isOpen)
    }
    const getMobileNavList = (NAV_LIST) => {
        return NAV_LIST.map(item => <div className="container-fluid mobile_navbar" onClick={toggleHandler} key={item.name}>
            <div className="container h-100">
                <Link to={item.url} className="w-100" aria-label={item.name}>
                    <div className="d-flex justify-content-between h-100 color-cyan align-items-center">
                        <div>{item.name}</div>
                        <div><img src={RIGHT_ARROW} alt="logo" height="20px" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>)
    }
    return (
        <>
            <header className="fixed_header">
                <div className="container-fluid header_location_bar text-right">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 ralewayLight">
                                <Link to="/location/" activeClassName='active_menu_item' aria-label='Our Location'>Our Location</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid header_navbar_wrapper pt-3 pb-3">
                    <div className="container d-none  d-xl-flex h-100 align-items-center">
                        <Link to="/" aria-label='Home page'>
                            <Image filename={LOGO_WEB} alt="loonum web logo image" className="Web_logo" />
                        </Link>
                        <ul className="d-flex m-auto nav-list ralewayMedium align-items-center">
                            {getNavList(NAV_LIST)}
                        </ul>
                    </div>
                    <div className="container d-flex d-xl-none h-100 align-items-center m-auto">
                        <Link to="/" aria-label='Home Page'>
                            <Image filename={LOGO_MOBILE} alt="loonum mobile logo image" className="mobile_logo" />
                        </Link>
                        {isOpen ?
                            <img src={CLOSE_ARROW} alt="logo" className="ml-auto" onClick={toggleHandler} /> : <img src={HAMBERGER} alt="logo" className="ml-auto" onClick={toggleHandler} />}

                    </div>

                </div>
                {isOpen ? getMobileNavList(NAV_LIST) : null}
            </header>
        </>
    )
}

export default Header