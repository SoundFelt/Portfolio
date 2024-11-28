import {createUseStyles} from 'react-jss'


export const useStyles = createUseStyles({
    rowContainer: {
        display: 'flex',
        width: '100%',
        padding: '0 50px',
        height: '500px',
        justifyContent: 'center',
        alignItems: 'center',
        "@media (max-width: 1200px)" : {
            flexDirection: 'column',
            height: '100%'
        },
        "@media (max-width: 500px)" : {
            padding: '0 10px'
        }
    },
    descriptionContainer: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '40%',
        alignItems: 'center',
        textAlign: 'center',
        margin: '0 50px',
        maxWidth: '500px',
        "& h4": {
            fontSize: '2rem',
            marginTop: '0',
            marginBottom: '15px',
            "@media (max-width: 1200px)": {
                fontSize: '1.7rem'
            }
        },
        "& p": {
            fontSize: '1.3rem',
            "@media (max-width: 1200px)": {
                fontSize: '1.2rem'
            }
        },
        "@media (max-width: 1200px)": {
            maxWidth: '90%',
            margin: '0 0 40px',
        }
    },
    mediaContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: '900px',
        maxHeight: '600px',
        margin: '0 10px',
        "@media (max-width: 500px)": {
            maxHeight: '100%'
        }
    },
    projectInfo: {
        marginTop: '20px',
        width: '70%',
        height: '100%',
        textAlign: 'center',
        "@media (max-width: 1200px)" : {
            width: '90%'
        }
    },
    projectImage: {
       textAlign: 'center',
       maxWidth: '50%',
    },
    img: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        textAlign: 'center',
        objectFit: 'cover',
        border: '2px solid black',
        verticalAlign: 'bottom'
        
    },
    linksContainer: {
        display: 'flex',
        width: '100%',
        "& h4" : {
            margin: '0',
        },
        textAlign: 'center',
        "& a" : {
            color: 'black',
            fontSize: '1rem',
            margin: '0'
        },
    },
    seeLive: {
        width: '50%',
        padding: '1px 0',
        borderBottom: '2px solid black',
        borderLeft: '2px solid black',
        borderRight: '2px solid black',
    },
    seeCode: {
        width: '50%',
        padding: '2px 0',
        borderBottom: '2px solid black',
        borderRight: '2px solid black'
    },
    logosContainer: {
        width: '100%',
        flexWrap: 'wrap',
        display: 'flex',
        justifyContent: 'center',
        // marginBottom: '50px',
        "& img" : {
            height: '35px',
            margin: '10px 20px',
        }
    }
    
})