import React from 'react'
import {useStyles} from './styles/ProjectRightStyles'

function ProjectRight(props) {
    const classes = useStyles()

    const html5Logo = props.logo1 === '/static/media/HTML5LogoColor.33745ead.png'
    const cssLogo = props.logo2 === '/static/media/CSSLogoColor.0c185e2b.png'

    return (
        <div className={classes.rowContainer}>

        <div className={classes.rowLeft}>
                <div className={classes.projectImage}>
                    <video className={classes.img} loop muted playsInline autoPlay src={props.projectVideo}></video>
                </div>
                <div className={classes.linksContainer}>
                    <div className={classes.seeLive}>
                        <h4><a href={props.seeLive} target="_blank" rel="noreferrer">See Live</a></h4>
                    </div>
                    <div className={classes.seeCode}>
                        <h4><a href={props.seeCode} target="_blank" rel="noreferrer">View Code</a></h4>
                    </div>
                </div>
            </div>

            <div className={classes.rowRight}>
                
                <div className={classes.projectInfo}>
                    <h4>{props.title}</h4>
                    <div className={classes.logosContainer}>
                        <div>
                            <img alt="logo1" className={`${html5Logo && classes.html5Logo}`} src={props.logo1}></img>
                        </div>
                        <div className={classes.logo2}>
                            <img alt="logo2" className={`${cssLogo && classes.cssLogo}`} src={props.logo2}></img>
                        </div>
                        {props.logo3 && <div className={classes.logo3}>
                            <img alt="logo3" src={props.logo3}></img>
                        </div>}
                    </div>
                    {props.description}
                </div>
            </div>

        </div>
    )
}

export default ProjectRight;

