import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    mainTextContainer: {
      width:'50%', 
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
        "@media (min-width: 1367px)": {
          fontSize: '6rem',
        },
        "@media (max-width: 964px)" : {
          fontSize: '3rem'
        },
        "@media (max-height: 1000px)" : {
          fontSize: '3rem',
        }
      },
      "& p": {
        textAlign: 'center',
        fontSize: '1.4rem',
        margin: '15px 0 128px',
        "@media (min-width: 1367px)" : {
          fontSize: '2rem',
        },
        "@media (max-height: 1000px)" : {
          fontSize: '1.6rem',
        },
        "@media (max-width: 700px)" : {
          fontSize: '1.2rem'
        }
      },
      "@media (min-width: 1367px)" : {
        width: '55%',
        top: '71%',
      },
      "@media (max-width: 1366px)" : {
        top: '72%'
      },
      "@media (max-width: 964px)" : {
        width: '80%',
      },
      "@media (max-height: 1000px)" : {
        top: '76%'
      },
      "@media (max-height: 700px)" : {
        top: '70%',
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
      backgroundSize: 'cover',
      "& img": {
        height: '100%',
        width: '100%',
        objectFit: 'cover'
      },
    },

  
  // ---Arrow animation in CSS file as not working in JSS--- //
  // arrow: {
  //   animation: 'arrowMove 2s infinite',
  //   cursor: 'pointer',
  // },
  // '@keyframes arrowMove': {
    // '0%' : { 
    //   transform: 'translateY(0)'
    // },
    // '50%' : {
    //   transform: 'translateY(15%)'
    // },
    // '100%' : {
    //   transform: 'translateY(0)'
    //  },
    // from: { transform: 'translateY(0)'},
    // to: {transform: 'translateY(15%)'}
  // }
})