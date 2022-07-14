import ImageList from './imagesData'
const { MAIN_LOGO, DANANJAYA_IMG, NIKHIL_IMG } = ImageList.OUR_STORY
export default {
    OUR_STORY_DATA:{
        HERO_DATA: {
            lOGO_HEADING: 'This is our story',
            LOGO: MAIN_LOGO,
            SUB_HEADING: 'Thrives on relationships and outcomes.',
            DESCRIPTION1: "Loonum was founded by Dananjaya, when he was working on a project at the Royal Melbourne Institute of Technology. He felt how passionate he is, doing what he loves and creating things to improve people's lives. Humble coffee catchups with friends & mentors and talking hours on how he wants to design & build products that have value led to this significant venture",
            DESCRIPTION2: "With over 15 years of global design and development experiencce, he has been delivering valued outcomes to digital products, digital services in major organisations.",
            DESCRIPTION3:""
        },
        FOUNDER_DATA: [
            {
                img: DANANJAYA_IMG,
                firstname: 'Dananjaya',
                lastname: 'Perera',
                designation: 'Chief Experience officer & CEO',
                description1: "Dananjaya began his career in 2003 as a freelance web designer during his time at university. As a passionate student he was keen to learn as much as possible and this allowed him to become a human-centered designer. He consistently designs projects with the user journey at the forefront, and solves business problems with digital transformation. He keeps clients engaged and up to date as a project is developed and delivered.",
                description2: "In his spare time Dananjaya is a passionate public speaker and mentors fellow designers. An enthusiastic cyclist, he’s completed a 13 day, 1500km bike ride supporting the CCC Foundation on a charity ride. He’s always happy for a catch up over coffee."
            }
            // {
            //     img: NIKHIL_IMG,
            //     firstname: 'Nikhil',
            //     lastname: 'Kumar',
            //     designation: 'Technical Director & CTO',
            //     description1: "Nikhil is passionate about creating unique and efficient digital products that take people through a memorable journey. He holds himself to high standards and is dedicated to finding solutions for digital obstacles. He enjoys the challenge of learning new and interesting technologies, and is always eager to hear what the big tech giants are developing next. He has produced a series of video lectures on YouTube and writes technical articles on Medium.",
            //     description2: "In his time aways from the keyboard, he’s a keen mountaineer and has climbed past the 5000m elevation markers in the Himalayan mountain range. He also loves cooking, and having a chat over the perfect cup of tea."
            // }
        ]
    }
    
}