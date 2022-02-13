import {useStyles} from './styles/AboutStyles'
import AboutImage from './images/AboutImage.png'
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
                <p className={classes.firstPTag}>As a self-taught developer, learning to code for just over a year now has been an exciting, challenging, and hugely rewarding endeavour.</p>
                <p>Coming from a classical music background and graduating from the Royal Birmingham Conservatoire in 2019, I started to feel that relying on music to make a living was not ideal.
                Having always been 'the tech guy', in my family, likely from growing up using phones, computers and enjoying keeping up to date with all the latest gadgets, I began wondering if a career in tech would be more suitable.</p>
                <p>I have always enjoyed being creative, filming projects, recording & editing, self-producing CDs, playing music, yet am someone who is still logical, and loves learning and understanding how things work.
                Being a front-end developer allows me to mix the two, creatively making UI's come to life but to do that I need to be logical and structured throughout the process. Best of both worlds!</p>
                <p>Spending much of my life so far becoming a proficient pianist has instilled important qualities - disipline, focus, self-motivation to name a few, many of which I think would be very useful as a developer.</p>
                <p>I feel that I have come on a long way since starting my first online bootcamp course at the start of 2021, but I appreciate there is much more to learn and that this will be a life-long journey.
                I am very much looking forward to entering my first role as a developer, and hope that I'll be able to bring much value to wherever I end up.</p>
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