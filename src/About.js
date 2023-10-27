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
                <p className={classes.firstPTag}>As a self-taught full stack developer, working in the heart of London at a music ed-tech startup for the past year has been an exciting, challenging and rewarding introduction in the world of software development.</p>
                <p>Originally coming from a classical music background and graduating from the Royal Birmingham Conservatoire in 2019, I began learning how to code in my spare time, and soon realised that this was what I wanted to be doing full time.</p>
                <p>Having learnt so much in the professional environment over this year, I am now looking for a role where I can continue to grow and develop my skills, creating high quality apps that will hopefully benefit many people's lives.</p>
                <p>I believe that I have many qualities that make me a great developer, one of the main ones being that I always focus on the user. The code that I write is to solve problems for them, and to make their experience as good as it can be. I am able to persevere to problem solve and have an eye for detail. I have a desire to always produce work to the highest level that I can achieve, and my consistancy, focus and disipline I know has helped me get to this point that I am at now.</p>
                <p>I have come on a long way since starting my first coding bootcamp at the start of 2021, and the more I work the more I realise how much more there is to learn and improve on.
                    I very much look forward to continuing my journey as a developer, and hope that if we work together, I'll be able to bring much value to your business.</p>
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