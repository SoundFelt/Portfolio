import React from 'react'
import {useStyles} from './styles/ProjectLeftStyles'
import TogetherMusicians from './images/TogetherMusicians.png'
import './Projects.css'

function ProjectFive() {
    const classes = useStyles()
    return (
        <div className={classes.rowContainer} style={{marginBottom: '100px'}}>

            <div className={classes.rowLeft}>
                
                <div className={classes.projectInfo}>
                    <h4 style={{marginBottom: '20px'}}>TogetherMusicians Platform</h4>
                    <p>A business I started last year and went live in 2022, I organised the development of this online platform.</p>
                    <p>Using a Wordpress theme as the base, I sought out developers and designers from freelance platforms to customise it into what it needed to be.</p>
                    <p>Over the development period I have increased my knowledge about Wordpress, its CMS and plugins, while also improving my organisational skills by managing to get the site up and running.</p>
                </div>
            </div>

            <div className={classes.rowRight}>
                <div className={classes.projectImage}>
                    <img className={classes.img} src={TogetherMusicians}></img>
                </div>
                <div className={classes.linksContainer}>
                    <div className={classes.seeLive} style={{width: '100%'}}>
                        <h4><a href="https://togethermusicians.co.uk/" target="_blank">See Live</a></h4>
                    </div>
                    
                </div>
            </div>
            <i class="fa-solid fa-list-check"></i>
        </div>
    )
}

export default ProjectFive;

