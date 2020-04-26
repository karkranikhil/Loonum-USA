import React, { useState } from "react"
import { Link } from "gatsby"
import headerStyles from './header.module.scss'
import MenuBar from '../MenuBar/index'
const Header = () => {
    const [productStatus, setProductStatus] = useState(false);
    const productHandler = () => {
        setProductStatus(!productStatus)
    }
    return (
        <>
            <header>
                <div className={`bg-darkgrey d-flex ${headerStyles.location_bar} ${headerStyles.location}`}>
                    <Link to="/location/">Our Location</Link>
                </div>
                <div className={`d-flex ${headerStyles.menu_bar}`}>
                    <div className="container d-flex">
                        <div>Icon</div>
                        <nav className="m-auto">
                            <ul className="menu">
                                <li>
                                    {/* <span onClick={productHandler} className={productStatus ? headerStyles.active_menu_item : ''}>PRODUCTS</span> */}
                                    <Link to="/products/" >PRODUCTS</Link>
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
                        </nav>
                    </div>
                </div>
            </header>
            {productStatus ? <MenuBar /> : null}

        </>
    )
}

export default Header