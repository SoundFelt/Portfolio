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
import CSSLogoColor from './images/CSSLogoColor.png'
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
            description: '<p>A take home task for my position at the music ed-tech startup.</p><p>Created in React with reliance on setIntervals & setTimeouts, but also learnt about the web audio API which can provide better accuracy for apps that require timing precision.</p><p>First project that required more of a mathmatical approach to get the tap tempo timing working, and lining up the animation correctly.</p>',
            liveLink: 'https://papaya-begonia-66ca97.netlify.app/',
            codeLink: 'https://github.com/SoundFelt/Metronome/'
        },
        { 
            video: MusicPlayerDemo, 
            title: 'Music player', 
            description: '<p>A fullstack music player with a twist, allowing users to add and save their own tracks for listening rather than stream.</p><p>Front-end built using React, Bulma & JSS for styling and icons taken from Font Awesome. Back-end uses Firebase for authentication, database and cloud storage</p>',
            liveLink: 'https://flamboyant-bartik-14ecb2.netlify.app/',
            codeLink: 'https://github.com/SoundFelt/MusicPlayer/'
        },
        { 
            video: UdemyCloneDemo, 
            title: 'Udemy clone', 
            description: '<p>Purely using HTML and CSS, I cloned the homepage of the popular course selling website Udemy.</p><p>This is fully responsive for all screen sizes and uses the image assets from their site. The icons used are from various resources including Font Awesome. </p><p>I was able to practise using flexbox and grid while improving my general skills in correctly organising layouts and responsiveness using mediaQueries.</p>',
            liveLink: 'https://adoring-pare-fa7671.netlify.app/',
            codeLink: 'https://github.com/SoundFelt/UdemyHomeClone'
        },
        { 
            video: GmailCloneDemo, 
            title: 'Gmail clone', 
            description: '<p>This project involved creating both a client and server to allow use of a MySQL database.</p><p>I was able to practise connecting MySQL with Node for sending/retrieving/updating data from the backend API using axios requests in the front end.</p><p>Session storage is used for Google Auth, and to track whether or not emails have been clicked on to enable different styling.</p>',
            liveLink: 'https://whimsical-clafoutis-c79838.netlify.app',
            codeLink: 'https://github.com/SoundFelt/GmailCloneFrontEnd'
        },
        { 
            video: ReactColorsDemo, 
            title: 'Color picker & palettes', 
            description: '<p>A project that helped me become better accustomed with React hooks and other useful features such as routing, validations and dynamic text colors.</p><p>Front-end built using React, Material UI & JSS for styling and icons taken from Font Awesome.</p><p>User made palettes are saved to local storage and palette creation features drag & drop and custom naming of colors/palettes.</p>',
            liveLink: 'https://loving-agnesi-21e42d.netlify.app/',
            codeLink: 'https://github.com/SoundFelt/ColorPicker'
        },
        { 
            video: TodoWeatherDemo, 
            title: 'Todos & Weather', 
            description: '<p>A standard todo list to practise CRUD using React hooks, as well as displaying a weather forecast.</p><p>The weather forecast allows users to enter any location, giving the current weather/temp, and the weather for next 2 days. The date/time is also matched to the location.</p><p>I learnt how to make the glass effect for the panels and how to dynamically change the background image based on the current weather condition.</p>',
            liveLink: 'https://brilliant-alpaca-af45c7.netlify.app',
            codeLink: 'https://github.com/SoundFelt/TodosWeather'
        },
    ]

    return ( 
        <div id="Projects" className={classes.projectsContainer}>

        <div className={classes.projectsTitleContainer}>
            <h1 className={classes.projectsTitle}>Project Highlights</h1>
        </div>

        <Project textLeft title="AcumoGlobal" description={<div><p>AcumoGlobal blah blah blah.A fullstack music player with a twist, allowing users to add and save their own tracks for listening rather than stream.</p><p>Front-end built using React, Bulma & JSS for styling and icons taken from Font Awesome.</p><p>Back-end uses Firebase for authentication, database and cloud storage.</p></div>}
        seeLive="https://www.acumoglobal.com"
        projectVideo={AcumoDemo} logo1={ReactLogoColor} logo2={ViteLogo} logo3={StyledComponentsLogo} logo4={ElysiaLogo} logo5={BunLogo} />
        <div style={{ backgroundColor: 'rgb(100, 100, 100)', height: '0.5px', width: '90%', margin: '75px auto' }}/>
        <Project title="Calendars" description={<div><p>A take home task for my position at the music ed-tech startup. Created in React with reliance on setIntervals & setTimeouts, but also learnt about the web audio API which can provide better accuracy for apps that require timing precision.</p><p>First project that required a more structured mathematical process to get the tap tempo timing working, and lining up the animation correctly.</p></div>}
        projectVideo={MobileCalendarDemo} projectVideo2={RoomBookingsDemo}
        logo1={ReactLogoColor} logo2={TypeScriptLogoColor} logo3={SASSLogo} logo4={NodeLogoColor} />
        <div style={{ backgroundColor: 'rgb(100, 100, 100)', height: '0.5px', width: '90%', margin: '75px auto' }} />
        <Project textLeft title="Client websites" description={<div><p>A fullstack music player with a twist, allowing users to add and save their own tracks for listening rather than stream.</p><p>Front-end built using React, Bulma & JSS for styling and icons taken from Font Awesome.</p><p>Back-end uses Firebase for authentication, database and cloud storage.</p></div>}
        seeLive='https://transcendent-stardust-69ebf5.netlify.app' seeCode='https://github.com/SoundFelt/PianoAccompaniment'
        projectVideo={ClientWebsite1Demo} projectVideo2={ClientWebsite2Demo} 
        logo1={ReactLogoColor} logo2={HTML5LogoColor} logo3={CSSLogoColor1} logo4={StyledComponentsLogo} />
        <div style={{ backgroundColor: 'rgb(100, 100, 100)', height: '0.5px', width: '90%', margin: '75px auto' }} />
        {/* <Project title="Metronome" description={<div><p>A take home task for my position at the music ed-tech startup. Created in React with reliance on setIntervals & setTimeouts, but also learnt about the web audio API which can provide better accuracy for apps that require timing precision.</p><p>First project that required a more structured mathematical process to get the tap tempo timing working, and lining up the animation correctly.</p></div>}
        seeLive='https://papaya-begonia-66ca97.netlify.app/' seeCode='https://github.com/SoundFelt/Metronome/'
        projectVideo={MetronomeDemo} logo1={ReactLogoColor} logo2={HTML5LogoColor} logo3={CSSLogoColor1} /> */}

        <Project title="Personal projects"
        seeLive='https://papaya-begonia-66ca97.netlify.app/' seeCode='https://github.com/SoundFelt/Metronome/'
        projectVideos={projectVideos} logo1={ReactLogoColor} logo2={TypeScriptLogoColor} logo3={JSSLogoColor} logo4={BulmaLogoColor} logo5={MaterialUILogoColor} logo6={MySQLLogoColor} logo7={FirebaseLogoColor} logo8={NodeLogoColor} />
            <div style={{ backgroundColor: 'rgb(100, 100, 100)', height: '0.5px', width: '90%', margin: '75px auto' }} />
        <Project textLeft title="TogetherMusicians" logo1={WordPressLogo} logo2={MySQLLogoColor} description={<div><p>A tech platform that I funded and had created in 2021 which was ready to market to users the following year.</p><p>Using a Wordpress theme as the base, I sought out developers and designers from freelance platforms to customize it into what it needed to be.</p><p>Over the development period I was able to learn the basics of Wordpress, its CMS and plugins, and MySQL while also improving my organisational skills by managing to get the site up and running.</p></div>}
        projectImage={TogetherMusicians} />

        {/* <Project title="Custom Music Player" description={<div><p>A fullstack music player with a twist, allowing users to add and save their own tracks for listening rather than stream.</p><p>Front-end built using React, Bulma & JSS for styling and icons taken from Font Awesome.</p><p>Back-end uses Firebase for authentication, database and cloud storage.</p></div>}
        seeLive='https://flamboyant-bartik-14ecb2.netlify.app/' seeCode='https://github.com/SoundFelt/MusicPlayer/'
        projectVideo={MusicPlayerDemo} logo1={ReactLogoColor} logo2={JSSLogoColor} logo3={BulmaLogoColor} logo4={FirebaseLogoColor}/>

        <Project textLef title="Color Palettes & Picker" description={<div><p>A project that helped me become better accustomed with React hooks and other useful features such as routing, validations and dynamic text colors.</p><p>Front-end built using React, Material UI & JSS for styling and icons taken from Font Awesome.</p><p>User made palettes are saved to local storage and palette creation features drag & drop and custom naming of colors/palettes.</p></div>}
        seeLive="https://loving-agnesi-21e42d.netlify.app/" seeCode="https://github.com/SoundFelt/ColorPicker"
        projectVideo={ReactColorsDemo} logo1={ReactLogoColor} logo2={MaterialUILogoColor} logo3={JSSLogoColor}/>

        <Project title="General Knowledge Quiz" description={<div><p>A general knowledge quiz built with React.</p><p>This was my first project using Typescript to try understanding the basics and is something I intend to build my knowledge with more in the future.</p><p>I was also able to practise fetching and displaying data from the quiz API using axios.</p></div>}
        seeLive='https://silly-shaw-d469de.netlify.app/' seeCode='https://github.com/SoundFelt/QuizApp'
        projectVideo={QuizDemo} logo1={ReactLogoColor} logo2={TypeScriptLogoColor} logo3={JSSLogoColor}/>

        <Project title="Udemy Homepage Clone" description={<div><p>Purely using HTML and CSS, I cloned the homepage of the popular course selling website Udemy.</p><p>This is fully responsive for all screen sizes and uses the image assets from their site. The icons used are from various resources including Font Awesome. </p><p>I was able to practise using flexbox and grid while improving my general skills in correctly organising layouts and responsiveness using mediaQueries.</p></div>}
        seeLive='https://adoring-pare-fa7671.netlify.app/' seeCode='https://github.com/SoundFelt/UdemyHomeClone'
        projectVideo={UdemyCloneDemo} logo1={HTML5LogoColor} logo2={CSSLogoColor}/>

        <Project title="Gmail Clone" description={<div><p>This project involved creating both a client and server to allow use of a MySQL database.</p><p>I was able to practise connecting MySQL with Node for sending/retrieving/updating data from the backend API using axios requests in the front end.</p><p>Session storage is used for Google Auth, and to track whether or not emails have been clicked on to enable different styling.</p></div>}
        seeLive='https://whimsical-clafoutis-c79838.netlify.app' seeCode='https://github.com/SoundFelt/GmailCloneFrontEnd'
        projectVideo={GmailCloneDemo} logo1={ReactLogoColor} logo2={MaterialUILogoColor} logo3={MySQLLogoColor} logo4={NodeLogoColor}/>

        <Project title="Todos & Weather Forecast" description={<div><p>A standard todo list to practise CRUD using React hooks, as well as displaying a weather forecast.</p><p>The weather forecast allows users to enter any location, giving the current weather/temp, and the weather for next 2 days. The date/time is also matched to the location.</p><p>I learnt how to make the 'glass' effect for the panels and how to dynamically change the background image based on the current weather condition.</p></div>}
        seeLive='https://brilliant-alpaca-af45c7.netlify.app' seeCode='https://github.com/SoundFelt/TodosWeather'
        projectVideo={TodoWeatherDemo} logo1={ReactLogoColor} logo2={CSSLogoColor1}/> */}

        

        <div class="projects-divider" style={{marginTop: '100px'}} >
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
            </svg>
        </div>

        </div>
     );
}

export default Projects;