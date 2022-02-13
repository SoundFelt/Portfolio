import {useStyles} from './styles/SkillsStyles'
import HTMLLogo1 from './images/HTML5Logo1.png'
import CSSLogo1 from './images/CSSLogo1.png'
import JSLogo1 from './images/JSLogo1.png'
import ReactLogo from './images/ReactLogo.png'
import MaterialUILogo from './images/MaterialUILogo.png'
import JSSLogo from './images/JSSLogo.png'
import BulmaLogo from './images/BulmaLogo.png'
import FirebaseLogo from './images/Firebase.png'
import './Skills.css'

function Skills() {
    const classes = useStyles()
    return ( 
        <div id="Skills" className={classes.skillsContainer}>
        <div className={classes.skillsContent}>
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>Current Skills</h1>
            </div>

            <div className={classes.logosContainer}>
                <div className={classes.HTML}>
                    <img src={HTMLLogo1}></img>
                    <p>HTML</p>
                </div>
                <div className={classes.CSS}>
                    <img src={CSSLogo1}></img>
                    <p>CSS</p>
                </div>
                <div className={classes.JS}>
                    <img src={JSLogo1}></img>
                    <p>JavaScript</p>
                </div>
                <div className={classes.React}>
                    <img src={ReactLogo}></img>
                    <p>ReactJS</p>
                </div>
                <div className={classes.MaterialUI}>
                    <img src={MaterialUILogo}></img>
                    <p>Material UI</p>
                </div>
                <div className={classes.JSS}>
                    <img src={JSSLogo}></img>
                    <p>JSS</p>
                </div>
                <div className={classes.Bulma}>
                    <img src={BulmaLogo}></img>
                    <p>Bulma</p>
                </div>
                <div className={classes.Firebase}>
                    <img src={FirebaseLogo}></img>
                    <p>Firebase</p>
                </div>
            </div>
            </div>
            

            <div class="custom-shape-divider-bottom-1639670220">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>

        

        </div> );
}

export default Skills;