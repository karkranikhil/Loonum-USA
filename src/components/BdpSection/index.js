
import React from "react"
import bdpStyles from './bdpSection.module.scss'
const BdpSection = () => {
    return (
        <section className={bdpStyles.wrapper}>
            <div className="container text-center pt-5 pb-5">
                <h2 className={bdpStyles.heading}>What is BDP</h2>
                <div className={bdpStyles.subheading}>Business Design Platform</div>
                <div className={bdpStyles.paragraph}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            </div>
        </section>
    )
}

export default BdpSection