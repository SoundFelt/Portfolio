import {useStyles} from './styles/SkillsStyles'
import HTMLLogo1 from './images/HTML5Logo1.png'
import CSSLogo1 from './images/CSSLogo1.png'
import JSLogo1 from './images/JSLogo1.png'
import ReactLogo from './images/ReactLogo.png'
import TypeScriptLogo from './images/TypeScriptLogo.png'
import MongoDBLogo from './images/MongoDBLogo.png'
import NodeLogo from './images/NodeLogo.png'
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
                        <img alt="htmllogo" src={HTMLLogo1}></img>
                        <p>HTML</p>
                    </div>
                    <div className={classes.CSS}>
                        <img alt="csslogo" src={CSSLogo1}></img>
                        <p>CSS</p>
                    </div>
                    <div className={classes.JS}>
                        <img alt="jslogo" src={JSLogo1}></img>
                        <p>JavaScript</p>
                    </div>
                    <div className={classes.React}>
                        <img alt="reactlogo" src={ReactLogo}></img>
                        <p>React & React Native</p>
                    </div>
                    <div className={classes.TypeScript}>
                        <img alt="typesciptlogo" src={TypeScriptLogo}></img>
                        <p>TypeScript</p>
                    </div>
                    <div className={classes.MongoDBLogo}>
                        <img alt="mongodblogo" src={MongoDBLogo}></img>
                        <p>MongoDB</p>
                    </div>
                    <div className={classes.NodeLogo}>
                        <img alt="nodelogo" src={NodeLogo}></img>
                        <p>Node & Express</p>
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