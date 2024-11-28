import {useStyles} from './styles/AboutStyles'
import AboutImage from './images/Profile.jpeg'
import './About.css'

function About() {
    const classes = useStyles()
    return ( 
        <div id="About" className={classes.aboutContainer}>
            <div className={classes.aboutTitleContainer}>
            <h1 className={classes.aboutTitle}>About Me</h1>
            </div>
        <div className={classes.aboutContent}>
            <div className={classes.imageContainer}>
                <img className={classes.aboutImg} src={AboutImage} alt="aboutImg"/>
            </div>
            <div className={classes.textContainer}>
            <div className={classes.aboutText}>
                <p>I’m a full-stack developer with over two years of professional experience, building efficient, user-centered solutions that solve real-world problems. Passionate about creating intuitive, impactful tools that make life easier for the people who use them. Whether working independently or as part of a team, I bring a strong focus on clean, efficient code and thoughtful design.</p>
                    
                <p>Most recently, I’ve been working in the fast-paced environment of a London-based ed-tech startup, where I’ve developed and maintained complex systems while collaborating closely with the team and end users to deliver impactful digital solutions that meet both business and user needs.</p>

                <p>In addition to my professional role, I co-founded AcumoGlobal, a platform designed to help international students apply to UK universities and settle into life abroad. This venture has given me hands-on experience in the full lifecycle of a digital product, from idea and design to development and delivery - reinforcing my ability to align technical work with broader business goals.</p>

                <p>Before transitioning into tech, I graduated from the Royal Birmingham Conservatoire as a classical pianist, where my background in music shaped my discipline, creativity, and attention to detail - qualities that now guide my approach to problem-solving and development. What started as a personal interest in coding quickly grew into a career that now gives me great satisfaction.</p>

                <p>I’m excited to take the next step in my journey, contributing my skills and dedication to a team where I can help build innovative products that make a difference.</p>
            </div>
            </div>
        </div>

        <div class="aboutTilt">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
        </div>
        
      </div>
     );
}

export default About;