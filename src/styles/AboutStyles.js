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
        justifyContent: 'space-between',
        margin: '50px auto',
       
    },
    imageContainer: {
        position: 'relative',
        display: 'inline-block',
        width: '35%',
        height: '100%',
        zIndex: '10',
        
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '95%',
            height: '96%',
            border: '7px solid black',
            left: '-20px',
            top: '20px',
            borderRadius: '10px',
            zIndex: '-1',
            opacity: '0.9'
        }
    },
    aboutImg: {
        display: 'block',
        borderRadius: '10px',
        width: '100%',
        zIndex:'10',
        boxShadow: '-10px 10px 20px grey'
    },
    
    textContainer: {
        width: '55.6%',
        
    },
    aboutText: {
        fontSize: '1.1rem',
        "& p": {
            textAlign: 'justify',
        },
        "@media (min-width: 1366px)" : {
            fontSize: '1.3vw'
        },
        "@media (max-width: 1365px)" : {
            fontSize: '1rem',
        },
        "@media (max-width: 964px)" : {
            fontSize: '0.9rem'
          },
       
    },
    firstPTag: {
        marginTop: '0',
    },
    
})