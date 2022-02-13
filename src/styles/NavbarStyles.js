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
        position: 'absolute'
    },
    logo: {
        margin: '0',
        color: 'white',
        fontSize: '1.5rem',
        textAlign: 'center',
        marginBottom: '2px'
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        '& span': {
            fontSize: '0.9rem',
            color: 'white',
            marginBottom: '5px'
        }
    },
    
    '@global': {
    a: {
        color: 'white',
        textDecoration: 'none',
        marginLeft: '30px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        },
    },
})