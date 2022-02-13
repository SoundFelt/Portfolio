import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    skillsContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0D1431',
         
    },
    skillsContent: {
        display: 'flex',
        flexDirection: 'column',   
        justifyContent: 'space-around',
        height: '250px',
        paddingBottom: '15px' 
    },
    titleContainer: {
        height: '50px',
        "@media (min-width: 1367px)" : {
            fontSize: '1.5rem',
            marginBottom: '60px'
        }
    },
    title: {
        color: 'white',
        margin: '0',
        textAlign: 'center',
        
    },
    logosContainer: {
        width: '85%',
        height: '130px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        "& img" : {
            height: '70px',
        },
        "& p": {
            color: 'white',
            textAlign: 'center',
            
        },
        "& div": {
            textAlign: 'center'
        }
        
    }
})