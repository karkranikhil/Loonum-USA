import ImageList from './imagesData'
const { MAIN_LOGO, DANANJAYA_IMG, NIKHIL_IMG } = ImageList.OUR_STORY
export default {
    OUR_STORY_DATA:{
        HERO_DATA: {
            lOGO_HEADING: 'This is our story',
            LOGO: MAIN_LOGO,
            SUB_HEADING: 'Thrives on relationships and outcomes.',
            DESCRIPTION: "Loonam was created by Dananjaya & Nikhil. They first met as colleagues working on a project at RMIT. On discovering a shared passion for creating things that improved people's lives and experiences, they found themselves having regular coffee catch ups to discuss plans for the future. After some time it came to them to start a new enterprise; one that focussed on business design, the user experience and developing complete solutions for small to mid-sized companies. With over 15 years of global design & development experience, and working with a multitude of different businesses. Loonum came into existence with the idea of helping businesses to streamline their online services and making sure that all systems are working in a harmonious relationship. At Loonum we say: Sometimes you need to take a few bricks out of the wall to make it stronger, other times you need to knock it down and rebuild it with new and improved services! We find out which way is best for your business in the long run, and only through discovery and learning can you see which path is the best."
        },
        FOUNDER_DATA: [
            {
                img: DANANJAYA_IMG,
                firstname: 'Dananjaya',
                lastname: 'Perera',
                designation: 'Design Director & CXO',
                description1: "Dananjaya began his career in 2003 as a freelance web designer during his time at university. As a passionate student he was keen to learn as much as possible and this allowed him to become a human-centered designer. He consistently designs projects with the user journey at the forefront, and solves business problems with digital transformation. He keeps clients engaged and up to date as a project is developed and delivered.",
                description2: "In his spare time Dananjaya is a passionate public speaker and mentors fellow designers. An enthusiastic cyclist, he’s completed a 13 day, 1500km bike ride supporting the CCC Foundation on a charity ride. He’s always happy for a catch up over coffee."
            },
            {
                img: NIKHIL_IMG,
                firstname: 'Nikhil',
                lastname: 'Kumar',
                designation: 'Technical Director & CTO',
                description1: "Nikhil is passionate about creating unique and efficient digital products that take people through a memorable journey. He holds himself to high standards and is dedicated to finding solutions for digital obstacles. He enjoys the challenge of learning new and interesting technologies, and is always eager to hear what the big tech giants are developing next. He has produced a series of video lectures on YouTube and writes technical articles on Medium.",
                description2: "In his time aways from the keyboard, he’s a keen mountaineer and has climbed past the 5000m elevation markers in the Himalayan mountain range. He also loves cooking, and having a chat over the perfect cup of tea."
            }
        ]
    }
    
}