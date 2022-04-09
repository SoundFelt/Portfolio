import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    navContainer: {
        boxSizing: 'border-box',
        width: '100%',
        height: '60px',
        margin: '0 0',
        padding: '0 30px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        "@media (max-width: 450px)" : {
            padding: '0 10px'
        }
    },
    logo: {
        margin: '0',
        color: 'white',
        fontSize: '1.5rem',
        textAlign: 'center',
        marginBottom: '2px',
        "@media (max-width: 450px)": {
            fontSize: '1.1rem'
        }
    },
    logoContainer: {
        '& span': {
            fontSize: '0.9rem',
            color: 'white',
            marginBottom: '5px',
            "@media (max-width: 450px)": {
                fontSize: '0.8rem'
            }
        },
    },
    linksContainer: {
        "& a" : {
            marginLeft: '30px',
            "@media (max-width: 600px)" : {
                fontSize: '0.9rem',
                marginLeft: '15px'
            }
        }
    },
    
    '@global': {
    a: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.2rem',
        cursor: 'pointer',
        },
    },
})