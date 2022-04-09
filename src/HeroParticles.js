import Particles from 'react-tsparticles'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  particlesWrapper: {
    "& canvas": {
      position: 'absolute !important',
      height: '90.5vh !important',
      paddingTop: '60px',
    }
  },
})

function HeroParticles() {
  const classes = useStyles()
  return (
    <Particles className={classes.particlesWrapper} options={{
        fpsLimit: 30,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse", 
            },
            onHover: {
              enable: true,
              mode: "connect", 
            },
            resize: false,
          },
          modes: {
            bubble: {
              distance: 150,
              duration: 0.2,
              opacity: 1,
              size: 10,
            },
            repulse: {
              distance: 150,
              duration: 1,
            },
            connect: {
              radius: 120
            },
          },
        },
        particles: {
          color: {
            value: "rgb(230,230,230)",
          },
          links: {
            color: "rgb(230,230,230)",
            distance: 100,
            enable: true,
            opacity: 0.1,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 2000,
            },
            value: 200,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'star'
        },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}/>
  )
}

export default HeroParticles