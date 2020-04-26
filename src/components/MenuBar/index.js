

import React, { useRef} from "react"
import menuBarStyle from './menuBar.module.scss'
import useOnClickOutside from './use-onclick-outside';
const MenuBar = (props) => {
    const ref = useRef();
    useOnClickOutside(ref, () => console.log("clicked outside"));
    return (
        <>
            <section className={menuBarStyle.menuBar_wrapper}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="row">
                                <div className="col-12">
                                    <div className={menuBarStyle.menu_heading}>PACKAGES</div>
                                </div>
                            </div>
                            <div className={`row ${menuBarStyle.menu_list}`}>
                                <div className="col-12">Small Business Package</div>
                                <div className="col-12">Medium Enterprise Package</div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className={menuBarStyle.menu_heading}>PRODUCTS</div>
                                </div>
                            </div>
                            <div className={`row ${menuBarStyle.menu_list}`}>
                                <div className="col-12">Website</div>
                                <div className="col-12">Dashbord (CMS)</div>
                                <div className="col-12">Inventory</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div></div>
        </>
    )
}

export default MenuBar