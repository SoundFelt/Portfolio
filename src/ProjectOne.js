import React from 'react'
import {useStyles} from './styles/ProjectLeftStyles'
import musicPlayerDemo from './images/MusicPlayerDemo.mov'
import ReactLogoColor from './images/ReactLogoColor.png'
import JSSLogoColor from './images/JSSLogoColor.png'
import BulmaLogoColor from './images/BulmaLogoColor.png'
import FirebaseLogoColor from './images/FirebaseLogoColor.png'

function ProjectOne() {
    const classes = useStyles()
    return (
        <div className={classes.rowContainer}>

            <div className={classes.rowLeft}>
                
                <div className={classes.projectInfo}>
                    <h4>Custom Music Player</h4>
                    <div className={classes.logosContainer}>
                        <div className={classes.ReactLogoColor}>
                            <img src={ReactLogoColor}></img>
                        </div>
                        <div className={classes.JSSLogoColor}>
                            <img src={JSSLogoColor}></img>
                        </div>
                        <div className={classes.BulmaLogoColor}>
                            <img src={BulmaLogoColor}></img>
                        </div>
                        <div className={classes.FirebaseLogoColor}>
                            <img src={FirebaseLogoColor}></img>
                        </div>
                    </div>
                    <p>A fullstack music player with a twist, allowing users to add and save their own tracks for listening rather than stream.</p>
                    <p>Front-end built using React, Bulma & JSS for styling and icons taken from Font Awesome.</p>
                    <p>Back-end uses Firebase for authentication, database and cloud storage.</p>
                </div>
            </div>

            <div className={classes.rowRight}>
                <div className={classes.projectImage}>
                    <video className={classes.img} loop muted playsInline autoPlay src={musicPlayerDemo}></video>
                </div>
                <div className={classes.linksContainer}>
                    <div className={classes.seeLive}>
                        <h4><a href="https://flamboyant-bartik-14ecb2.netlify.app/" target="_blank">See Live</a></h4>
                    </div>
                    <div className={classes.seeCode}>
                        <h4><a href="https://github.com/SoundFelt/MusicPlayer" target="_blank">View Code</a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectOne;

