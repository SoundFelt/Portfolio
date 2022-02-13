import {Link} from 'react-scroll'
import {useStyles} from './styles/NavbarStyles'

function Navbar() {
    const classes = useStyles()
    return ( 
        <div id="Navbar" className={classes.navContainer}> 
            <div className={classes.logoContainer}>
                <h2 className={classes.logo}>Anthony McLean </h2>
                <span>&lt; Web Developer /&gt;</span>
            </div>
            <div className={classes.linksContainer}>
                <Link to="About" smooth={true} duration={1000}>About</Link>
                <Link to="Skills" smooth={true} duration={1000}>Skills</Link>
                <Link to="Projects" smooth={true} duration={1000}>Projects</Link>
                <Link to="Contact" smooth={true} duration={1000}>Contact</Link>
            </div>

        </div>
     );
}

export default Navbar;