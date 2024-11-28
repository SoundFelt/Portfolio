import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    aboutContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EFFAF9'
    },
    aboutTitleContainer: {
        textAlign: 'center',
    },
    aboutTitle: {
        display: 'inline-block',
        position: 'relative',
        margin: '0',
        paddingTop: '20px', 
        "@media (min-width: 1367px)" : {
            fontSize: '3rem'
        }
    },
    aboutContent: {
        display: 'flex',
        width: '85%',
        justifyContent: 'center',
        margin: '50px auto',
        "@media (max-width: 600px)" : {
            width: '95%'
        }       
    },
    imageContainer: {
        position: 'relative',
        display: 'inline-block',
        width: '30%',
        height: '100%',
        zIndex: '10',
        "@media (max-width: 964px)": {
            width: '50%'
        },
        "@media (max-width: 600px)": {
            width: '65%'
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '95%',
            maxWidth: '600px',
            height: '98%',
            border: '7px solid black',
            left: '-20px',
            top: '20px',
            borderRadius: '10px',
            zIndex: '-1',
            opacity: '0.9',
            "@media (max-width: 600px)" : {
                display: 'none',
            }
        }
    },
    aboutImg: {
        display: 'block',
        borderRadius: '10px',
        width: '100%',
        maxWidth: '600px',
        zIndex:'10',
        boxShadow: '-10px 10px 20px grey'
    },
    
    textContainer: {
        width: '50%',
        marginLeft: '100px',
        "@media (max-width: 964px)" : {
            marginLeft: '0'
        }
    },
    aboutText: {
        fontSize: '1.1rem',
        "& p": {
            textAlign: 'justify',
        },
        "@media (min-width: 1366px)" : {
            fontSize: '1.4rem'
        },
        "@media (max-width: 1365px)" : {
            fontSize: '1rem',
        },
        "@media (max-width: 964px)" : {
            fontSize: '1.1rem'
          },
        "@media (max-width: 500px)": {
            fontSize: "1.3rem"
        }
    },
    firstPTag: {
        marginTop: '0',
    },

    "@media (max-width: 964px)" : {
        aboutContent: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        textContainer: {
            width: '100%',
            marginTop: '50px'
        },
    }
    
})