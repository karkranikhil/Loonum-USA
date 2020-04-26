
import React from "react"
import foundersStyles from './founders.module.scss'
import NIKHIL_IMG from '../../images/Our_Story_Page/Nikhil.png'
import DANANJAYA_IMG from '../../images/Our_Story_Page/Dananjaya.png'
const FOUNDER_DATA = [
    {
        img: DANANJAYA_IMG,
        firstname: 'Dananjaya',
        lastname: 'Perera',
        designation: 'Designer',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        img: NIKHIL_IMG,
        firstname: 'Nikhil',
        lastname: 'Karkra',
        designation: 'Developer',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]
const FoundersCard = (item) => {
    return (
        <>
            <div>
                <img src={item.img} alt={item.firstname} />
                <div>{item.firstname}</div>
                <div>{item.lastname}</div>
                <div>{item.designation}</div>
            </div>
            <div>{item.description}</div>
        </>
    )
}
const Founders = () => {
    return (
        <section>
            <div className="container pt-5 pb-5">
                <h2>Co-Founders</h2>
                {FOUNDER_DATA.map(item => <FoundersCard {...item} />)}
            </div>
        </section>
    )
}

export default Founders