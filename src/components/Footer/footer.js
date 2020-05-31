import React from "react"
import './footer.scss'
import { Link } from "gatsby"
const Footer = (props) => {
    const { FIND_US, FOOTER_LOGO, FOOTER_SUBTEXT_ONE, FOOTER_SUBTEXT_TWO, NEW_TO_LOONUM, PRIVACY_TEXT, PRODUCT_LIST, SOCIAL_MEDIA, WHY_LOONUM, WHY_LOONUM_LIST } = props.FOOTER_DATA
    return (
        <footer className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <img src={FOOTER_LOGO} alt="footer logo" className="mb-3" />
                        <p className="small_text gothamLight white">{FOOTER_SUBTEXT_ONE}</p>
                        <p className="small_text gothamLight white">{FOOTER_SUBTEXT_TWO}</p>
                    </div>
                    <div className="d-none d-lg-flex col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col col-lg-6">
                                <div className="footer_heading gothamMedium">{NEW_TO_LOONUM}</div>
                                {PRODUCT_LIST.map(item => (
                                    <div className="small_text gothamLight pt-1" key={item.name}>
                                        <Link to={item.url} aria-label={item.name} >{item.name}</Link>
                                    </div>

                                ))}
                            </div>
                            <div className="col col-lg-6">
                                <div className="footer_heading gothamMedium">{WHY_LOONUM}</div>
                                {WHY_LOONUM_LIST.map(item => (
                                    <div className="small_text gothamLight pt-1" key={item.name}>
                                        <Link to={item.url} aria-label={item.name} state={{ "tabLabel": item.state }}>{item.name}</Link>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="footer_heading gothamMedium">{FIND_US}</div>
                                <div className="d-flex">
                                    {SOCIAL_MEDIA.map(item => (
                                        <a rel="noreferrer noopener" href={item.Links} aria-label={item.Links} key={item.image} target="_blank" className={`small_text gothamLight pr-3 pt-3 ${item.class}`} key={item.image}><img src={item.image} alt={item.Links} /></a>

                                    ))}
                                    <span className="small_text gothamLight pr-0 pr-sm-3 pt-3 l-height-26 gothamMedium letter_space margin-top-5">37.8136° S | 144.9631° E</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="small_text gothamLight col-12">
                        <div className="border_top pt-2 white privacy_text">{PRIVACY_TEXT}</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer