import React from 'react'
import {useStyles} from './styles/ProjectRightStyles'
import UdemyCloneDemo from './images/UdemyCloneDemo.mov'
import HTML5LogoColor from './images/HTML5LogoColor.png'
import CSSLogoColor from './images/CSSLogoColor.png'

function ProjectFour() {
    const classes = useStyles()
    return (
        <div className={classes.rowContainer}>

        <div className={classes.rowLeft}>
                <div className={classes.projectImage}>
                    <video className={classes.img} loop muted playsInline autoPlay src={UdemyCloneDemo}></video>
                </div>
                <div className={classes.linksContainer}>
                    <div className={classes.seeLive}>
                        <h4><a href="https://adoring-pare-fa7671.netlify.app/" target="_blank">See Live</a></h4>
                    </div>
                    <div className={classes.seeCode}>
                        <h4><a href="https://github.com/SoundFelt/UdemyHomeClone" target="_blank">View Code</a></h4>
                    </div>
                </div>
            </div>

            <div className={classes.rowRight}>
                
                <div className={classes.projectInfo}>
                    <h4>Udemy Homepage Clone</h4>
                    <div className={classes.logosContainer} style={{justifyContent: 'center'}}>
                        <div className={classes.HTML5LogoColor}>
                            <img src={HTML5LogoColor} style={{width: '40px', height: '42px', paddingTop: '1px'}}></img>
                        </div>
                        <div className={classes.CSSLogoColor}>
                            <img src={CSSLogoColor} style={{width: '32px', height: '47px', marginLeft: '15px'}}></img>
                        </div>
                    </div>
                    <p>Purely using HTML and CSS, I cloned the homepage of the popular course selling website Udemy.</p>
                    <p>This is fully responsive for all screen sizes and uses the image assets from their site. The icons used are from various resources including Font Awesome. </p>
                    <p>I was able to practise using flexbox and grid while improving my general skills in correctly organising layouts and responsiveness using mediaQueries.</p>
                </div>
            </div>

        </div>
    )
}

export default ProjectFour;
