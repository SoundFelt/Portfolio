import React from 'react'
import {useStyles} from './styles/ProjectLeftStyles'
import QuizDemo from './images/QuizDemo.mov'
import ReactLogoColor from './images/ReactLogoColor.png'
import JSSLogoColor from './images/JSSLogoColor.png'
import BulmaLogoColor from './images/BulmaLogoColor.png'
import TypeScriptLogoColor from './images/TypeScriptLogoColor.png'

function ProjectThree() {
    const classes = useStyles()
    return (
        <div className={classes.rowContainer}>

            <div className={classes.rowLeft}>
                
                <div className={classes.projectInfo}>
                    <h4>General Knowledge Quiz</h4>
                    <div className={classes.logosContainer}>
                        <div className={classes.ReactLogoColor}>
                            <img src={ReactLogoColor}></img>
                        </div>
                        <div className={classes.TypeScriptLogoColor}>
                            <img src={TypeScriptLogoColor}></img>
                        </div>
                        <div className={classes.JSSLogoColor}>
                            <img src={JSSLogoColor}></img>
                        </div>
                    </div>
                    <p>A general knowledge quiz built with React.</p>
                    <p>This was my first project using Typescript to try understanding the basics and is something I intend to build my knowledge with more in the future.</p>
                    <p>I was also able to practise fetching and displaying data from the quiz API using axios.</p>
                </div>
            </div>

            <div className={classes.rowRight}>
                <div className={classes.projectImage}>
                    <video className={classes.img} loop muted playsInline autoPlay src={QuizDemo}></video>
                </div>
                <div className={classes.linksContainer}>
                    <div className={classes.seeLive}>
                        <h4><a href="https://silly-shaw-d469de.netlify.app/" target="_blank">See Live</a></h4>
                    </div>
                    <div className={classes.seeCode}>
                        <h4><a href="https://github.com/SoundFelt/QuizApp" target="_blank">View Code</a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectThree;
