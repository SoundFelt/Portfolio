import {createUseStyles} from 'react-jss'


export const useStyles = createUseStyles({
    rowContainer: {
        display: 'flex',
        width: '80%',
        height: '400px',
        margin: 'auto',
        "@media (min-width: 1367px)": {
            marginBottom: '100px'
            }
    },
    rowLeft: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center'
    },

    projectInfo: {
        marginTop: '20px',
        width: '70%',
        height: '100%',
        textAlign: 'center',
        "& h4" : {
            fontSize: '1.4rem',
            marginBottom: '15px',
            "@media (min-width: 1367px)" : {
                fontSize: '2rem',
            }
        },
        "& p" : {
            fontSize: '1.1rem',
            "@media (min-width: 1367px)" : {
                fontSize: '1.3rem',
            },
            "@media (max-width: 964px)" : {
                fontSize: '1rem'
              }
        }
    },
    rowRight: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'

    },
    projectImage: {
       textAlign: 'center',
       width: '100%',
       height: '100%',
    },
    img: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        textAlign: 'center',
        objectFit: 'cover',
        border: '2px solid black'
        
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
        }
    },
    seeLive: {
        width: '50%',
        padding: '2px 0',
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
        width: '45%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
    
        "& img" : {
            height: '30px',
        }
    }
    
})