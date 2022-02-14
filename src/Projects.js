import {createUseStyles} from 'react-jss'
import './Projects.css'
import ProjectOne from './ProjectOne'
import ProjectTwo from './ProjectTwo'
import ProjectThree from './ProjectThree'
import ProjectFour from './ProjectFour'
import ProjectFive from './ProjectFive'

const useStyles = createUseStyles({
    projectsContainer: {
        backgroundColor: '#EFFAF9',
        height: '100%',
        width: '100%'
    },
    projectsTitleContainer: {
        textAlign: 'center',
        marginBottom: '40px',
        "@media (min-width: 1367px)" : {
            fontSize: '1.5rem',
            paddingBottom: '50px'
        },
        "@media (max-width: 800px)" : {
            margin: '0'
        }
    },
    projectsTitle: {
        display: 'inline-block',
        position: 'relative',
        margin: '0',
        paddingTop: '20px', 
    },
})

function Projects() {
    const classes = useStyles()
    return ( 
        <div id="Projects" className={classes.projectsContainer}>

        <div className={classes.projectsTitleContainer}>
            <h1 className={classes.projectsTitle}>Projects</h1>
        </div>

        <ProjectOne/>
        <ProjectTwo/>
        <ProjectThree/>
        <ProjectFour/>
        <ProjectFive/>

        <div class="projects-divider">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
            </svg>
        </div>

        </div>
     );
}

export default Projects;