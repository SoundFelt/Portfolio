import {useStyles} from './styles/ProjectsStyles'
import './Projects.css'
import Project from './Project'
import AcumoDemo from './images/AcumoDemo.mov'
import RoomBookingsDemo from './images/RoomBookingsDemo.mov'
import MobileCalendarDemo from './images/MobileCalendarDemo.mov'
import ClientWebsite1Demo from './images/ClientWebsite1Demo.mov'
import ClientWebsite2Demo from './images/ClientWebsite2Demo.mov'
import MetronomeDemo from './images/MetronomeDemo.mov'
import MusicPlayerDemo from './images/MusicPlayerDemo.mov'
import ReactColorsDemo from './images/ReactColorsDemo.mov'
import UdemyCloneDemo from './images/UdemyCloneDemo.mov'
import GmailCloneDemo from './images/GmailCloneDemo.mov'
import TodoWeatherDemo from './images/TodoWeatherDemo.mov'
import TogetherMusicians from './images/TogetherMusicians.png'
import ReactLogoColor from './images/ReactLogoColor.png'
import JSSLogoColor from './images/JSSLogoColor.png'
import BulmaLogoColor from './images/BulmaLogoColor.png'
import FirebaseLogoColor from './images/FirebaseLogoColor.png'
import MaterialUILogoColor from './images/MaterialUILogoColor.png'
import TypeScriptLogoColor from './images/TypeScriptLogoColor.png'
import HTML5LogoColor from './images/HTML5LogoColor.png'
import CSSLogoColor1 from './images/CSSLogoColor1.png'
import NodeLogoColor from './images/NodeLogoColor.png'
import MySQLLogoColor from './images/MySQLLogoColor.png'
import SASSLogo from './images/SASSLogo.png'
import ViteLogo from './images/ViteLogo.png'
import StyledComponentsLogo from './images/StyledComponentsLogo.png'
import ElysiaLogo from './images/ElysiaLogo.png'
import BunLogo from './images/BunLogo.png'
import WordPressLogo from './images/WordPressLogo.png'

function Projects() {
    const classes = useStyles();

    const projectVideos = [
        { 
            video: MetronomeDemo, 
            title: 'Metronome', 
            description: '<p>A take home task for my position at Involve Education.</p><p>Built with React, relying on setInterval and setTimeout for timing, while also exploring the Web Audio API for more precise timing solutions.</p><p>This project was my first big step up in mathematical problem-solving in code, particularly for implementing tap tempo functionality and synchronizing animations.</p>',
            liveLink: 'https://papaya-begonia-66ca97.netlify.app/',
            codeLink: 'https://github.com/SoundFelt/Metronome/'
        },
        { 
            video: MusicPlayerDemo, 
            title: 'Music player', 
            description: '<p>A full-stack music player with a twist, allowing users to upload and save their own tracks for offline listening rather than streaming.</p><p>The front end was built with React, styled using Bulma and JSS, with icons from Font Awesome.</p><p>The back end leverages Firebase for authentication, database management, and cloud storage.</p>',
            liveLink: 'https://flamboyant-bartik-14ecb2.netlify.app/',
            codeLink: 'https://github.com/SoundFelt/MusicPlayer/'
        },
        { 
            video: UdemyCloneDemo, 
            title: 'Udemy clone', 
            description: '<p>A fully responsive homepage clone of Udemy, created using only HTML and CSS.</p><p>This project was a great opportunity to practice Flexbox and Grid layouts while improving responsiveness using media queries. It uses assets and icons from Font Awesome and other online resources.</p>',
            liveLink: 'https://adoring-pare-fa7671.netlify.app/',
            codeLink: 'https://github.com/SoundFelt/UdemyHomeClone'
        },
        { 
            video: GmailCloneDemo, 
            title: 'Gmail clone', 
            description: '<p>This project involved building both a client and server to connect with a MySQL database.</p><p>I practiced using Node.js to create backend APIs for CRUD operations, accessed through Axios requests on the React front end.</p><p>Features include session storage for Google authentication and tracking email read status to dynamically update styles.</p>',
            liveLink: 'https://whimsical-clafoutis-c79838.netlify.app',
            codeLink: 'https://github.com/SoundFelt/GmailCloneFrontEnd'
        },
        { 
            video: ReactColorsDemo, 
            title: 'Color picker & palettes', 
            description: '<p>A project focused on enhancing my familiarity with React hooks, routing, form validation, and dynamic styling.</p><p>The front end, styled with Material UI and JSS, includes drag-and-drop functionality for creating custom palettes with user-defined names. Palettes are saved locally for persistent use.</p>',
            liveLink: 'https://loving-agnesi-21e42d.netlify.app/',
            codeLink: 'https://github.com/SoundFelt/ColorPicker'
        },
        { 
            video: TodoWeatherDemo, 
            title: 'Todos & Weather', 
            description: '<p>A project combining a CRUD-based to-do list with a dynamic weather forecast feature.</p><p>Users can check the current weather and a two-day forecast for any location, with local time/date adjustments.</p><p>Dynamic backgrounds change based on weather conditions, and I also implemented a glassmorphism effect for the UI.</p>',
            liveLink: 'https://brilliant-alpaca-af45c7.netlify.app',
            codeLink: 'https://github.com/SoundFelt/TodosWeather'
        },
    ]

    return ( 
        <div id="Projects" className={classes.projectsContainer}>

        <div className={classes.projectsTitleContainer}>
            <h1 className={classes.projectsTitle}>Project Highlights</h1>
        </div>

        <Project textLeft title="AcumoGlobal" description={<div><p>A business I co-founded to modernise the application process for international students coming to study music in the UK.</p><p>The platform features a Vite/React front-end paired with a Bun and Elysia backend, chosen over the traditional Node/Express stack to improve server performance which was important given the need to host outside of mainland China.</p><p>To ensure accessibility within China I avoided using Google services and any banned social media integrations.</p></div>}
        seeLive="https://www.acumoglobal.com"
        projectVideo={AcumoDemo} logo1={ReactLogoColor} logo2={ViteLogo} logo3={StyledComponentsLogo} logo4={ElysiaLogo} logo5={BunLogo} />
        <div style={{ backgroundColor: 'rgb(100, 100, 100)', height: '0.5px', width: '90%', margin: '75px auto' }}/>

        <Project title="Calendars" 
        description={<div><p>Two custom calendars that I independently created while at Involve Education, now in use by over 200 schools across the UK.</p>
            <p>The first is a mobile scheduling calendar featuring drag-and-drop functionality from the React DND library, designed to replace the React BigCalendar library. The second is a room bookings calendar which was an idea I pitched initially and was able to introduce as a brand-new feature for the platform.</p>
            <p>Building both calendars from scratch was an invaluable experience, deepening my understanding of React and how to improve rendering efficiency with hooks such as useCallback and useMemo.</p>
            </div>
        }
        projectVideo={MobileCalendarDemo} projectVideo2={RoomBookingsDemo}
        logo1={ReactLogoColor} logo2={TypeScriptLogoColor} logo3={SASSLogo} logo4={NodeLogoColor} />
        <div style={{ backgroundColor: 'rgb(100, 100, 100)', height: '0.5px', width: '90%', margin: '75px auto' }} />

        <Project textLeft title="Client websites" description={<div>
            <p>These are personal websites I created for musicians, with one currently in development. Mixed between my own design to improve my eye in UI and UX, and inspiration from themes, my aim was to make their own style come through.</p>
            <p>I also wated to create well-structured and clear codebases to ensure future development would be easier for other developers in the future.</p>
            </div>
        }
        seeLive='https://transcendent-stardust-69ebf5.netlify.app' seeCode='https://github.com/SoundFelt/PianoAccompaniment'
        projectVideo={ClientWebsite1Demo} projectVideo2={ClientWebsite2Demo} 
        logo1={ReactLogoColor} logo2={HTML5LogoColor} logo3={CSSLogoColor1} logo4={StyledComponentsLogo} />
        <div style={{ backgroundColor: 'rgb(100, 100, 100)', height: '0.5px', width: '90%', margin: '75px auto' }} />

        <Project title="Personal projects"
        seeLive='https://papaya-begonia-66ca97.netlify.app/' seeCode='https://github.com/SoundFelt/Metronome/'
        projectVideos={projectVideos} logo1={ReactLogoColor} logo2={TypeScriptLogoColor} logo3={JSSLogoColor} logo4={BulmaLogoColor} logo5={MaterialUILogoColor} logo6={MySQLLogoColor} logo7={FirebaseLogoColor} logo8={NodeLogoColor} />
        <div style={{ backgroundColor: 'rgb(100, 100, 100)', height: '0.5px', width: '90%', margin: '75px auto' }} />

        <Project textLeft title="TogetherMusicians" logo1={WordPressLogo} logo2={MySQLLogoColor} description={<div>
            <p>In 2021, I funded and launched a tech platform that was ready to market to users the following year.</p>
            <p>Starting with a WordPress theme as the foundation, I collaborated with freelance developers and designers to customize it to meet the platform's specific needs.</p>
            <p>Throughout the development process, I gained hands-on experience with WordPress, its CMS and plugins, and MySQL, while also enhancing my organizational skills by successfully managing the project from concept to completion.</p>
            </div>
        }
        projectImage={TogetherMusicians} />
        
        <div class="projects-divider" style={{marginTop: '100px'}} >
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
            </svg>
        </div>

        </div>
     );
}

export default Projects;