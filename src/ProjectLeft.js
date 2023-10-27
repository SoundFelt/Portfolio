import React from 'react'
import {useStyles} from './styles/ProjectLeftStyles'

function ProjectLeft(props) {
    const classes = useStyles()
    return (
        <div className={classes.rowContainer}>

            <div className={classes.rowLeft}>
                
                <div className={classes.projectInfo}>
                    <h4>{props.title}</h4>
                    {props.logo1 && <div className={classes.logosContainer}>
                        <div className={classes.logo1}>
                            <img alt="logo1" src={props.logo1}></img>
                        </div>
                        <div className={classes.logo2}>
                            <img alt="logo2" src={props.logo2}></img>
                        </div>
                        { props.logo3 && (
                            <div className={classes.logo3}>
                                <img alt="logo3" src={props.logo3}></img>
                            </div>
                        )}
                        { props.logo4 && (
                            <div className={classes.logo4}>
                                <img alt="logo4" src={props.logo4}></img>
                            </div>
                        )}
                    </div>}
                    {props.description}
                </div>
            </div>

            <div className={classes.rowRight}>
                <div className={classes.projectImage}>
                    {props.projectVideo ? <video className={classes.img} loop muted playsInline autoPlay src={props.projectVideo}></video>
                    : <img alt="project" className={classes.img} src={props.projectImage}></img>}
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
        </div>
    )
}

export default ProjectLeft;

