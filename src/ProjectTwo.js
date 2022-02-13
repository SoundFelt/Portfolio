import React from 'react'
import {useStyles} from './styles/ProjectRightStyles'
import ReactColorsDemo from './images/ReactColorsDemo.mov'
import ReactLogoColor from './images/ReactLogoColor.png'
import JSSLogoColor from './images/JSSLogoColor.png'
import MaterialUILogoColor from './images/MaterialUILogoColor.png'

function ProjectTwo() {
    const classes = useStyles()
    return (
        <div className={classes.rowContainer}>

        <div className={classes.rowLeft}>
                <div className={classes.projectImage}>
                    <video className={classes.img} loop muted playsInline autoPlay src={ReactColorsDemo}></video>
                </div>
                <div className={classes.linksContainer}>
                    <div className={classes.seeLive}>
                        <h4><a href="https://loving-agnesi-21e42d.netlify.app/" target="_blank">See Live</a></h4>
                    </div>
                    <div className={classes.seeCode}>
                        <h4><a href="https://github.com/SoundFelt/ColorPicker" target="_blank">View Code</a></h4>
                    </div>
                </div>
            </div>

            <div className={classes.rowRight}>
                
                <div className={classes.projectInfo}>
                    <h4>Color Palettes & Picker</h4>
                    <div className={classes.logosContainer}>
                        <div className={classes.ReactLogoColor}>
                            <img src={ReactLogoColor}></img>
                        </div>
                        <div className={classes.MaterialUILogoColor}>
                            <img src={MaterialUILogoColor}></img>
                        </div>
                        <div className={classes.JSSLogoColor}>
                            <img src={JSSLogoColor}></img>
                        </div>
                    </div>
                    <p>A project that helped me become better accustomed with React hooks and other useful features such as routing, validations and dynamic text colors.</p>
                    <p>Front-end built using React, Material UI & JSS for styling and icons taken from Font Awesome.</p>
                    <p>User made palettes are saved to local storage and palette creation features drag & drop and custom naming of colors/palettes.</p>
                </div>
            </div>

        </div>
    )
}

export default ProjectTwo;

