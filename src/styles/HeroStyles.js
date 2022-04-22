import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    mainTextContainer: {
      width:'60%', 
      height: '100%',
      color: 'white',
      margin: '0',
      position: 'absolute',
      top: '67%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '200',
      "& h2": {
        textAlign: 'center',
        fontSize: '4rem',
        marginBottom: '0',
      },
      "& p": {
        textAlign: 'center',
        fontSize: '1.4rem',
        margin: '15px 0 128px',
      },
    },
    findOutMore: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      "& img": {
        color: 'white',
        fontSize: '0.5rem',
      },
      "& a": {
        margin: '0'
      },
      "@media (min-width: 1367px)": {
        fontSize: '1.5rem'
      }
    },
    imageContainer: {
      height: '100vh',
      "& img": {
        height: '100%',
        width: '100%',
        objectFit: 'cover'
      },
    },
    "@media (max-width: 960px)" : {
      mainTextContainer: {
        top: '71%',
        width: '80%',
        "& h2": {
          fontSize: '3rem'
        },
        "& p": {
          fontSize: '1.2rem'
        }
      }
    },
    "@media (max-width: 460px)" : {
      mainTextContainer: {
        width: '80%',

        "& h2": {
          fontSize: '2.1rem'
        },
        "& p": {
          fontSize: '1rem'
        }
      }
    },
    "@media (min-width: 1500px)" : {
      mainTextContainer: {
        width: '50%',
        "& p" : {
          fontSize: '1.75rem'
        }
      },
    },
    "@media (min-height: 700px)" : {
      mainTextContainer: {
        top: '75%'
      }
    }
})