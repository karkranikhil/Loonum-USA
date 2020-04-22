import React from "react"
import { Link } from "gatsby"
import headerStyles from './header.module.scss'
const Header = () => {
    return (
        <header>
            <div className={`bg-darkgrey d-flex ${headerStyles.location_bar}`}>
                <div>Our Location</div>
            </div>
            <div className={`d-flex ${headerStyles.menu_bar}`}>
                <div className="container d-flex">
                        <div>Icon</div>
                    <nav className="m-auto">
                        <ul className="menu">
                                <li>
                                    <Link to="/products/">PRODUCTS</Link>
                                </li>
                                <li>
                                    <Link to="/services/">SERVICES</Link>
                                </li>
                                <li>
                                    <Link to="/simpleidea/">A SIMPLE IDEA</Link>
                                </li>
                                
                                <li>
                                    <Link to="/story/">OUR STORY</Link>
                                </li>
                            </ul>
                        </nav>
                </div>
            </div>
           

        </header>
    )
}

export default Header