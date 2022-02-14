import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    skillsContainer: {
        width: '100%',
        height: '400px',
        backgroundColor: '#0D1431',
         
    },
    skillsContent: {
        display: 'flex',
        flexDirection: 'column',   
        justifyContent: 'space-around',
        "@media (max-width: 800px)" : {
            justifyContent: 'center'
        },
        height: '250px',
        paddingBottom: '15px' 
    },
    titleContainer: {
        height: '50px',
        marginBottom: '70px',
        "@media (min-width: 1367px)" : {
            fontSize: '1.5rem',
        },
        "@media (max-width: 800px)": {
            marginBottom: '20px'
        }
    },
    title: {
        color: 'white',
        margin: '0',
        textAlign: 'center',
        
    },
    logosContainer: {
        width: '85%',
        flexWrap: 'wrap',
        height: '130px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        "& img" : {
            height: '70px',
            "@media (max-width: 800px)" : {
                height: '50px'
            }
            
        },
        "& p": {
            color: 'white',
            textAlign: 'center',   
        },
        "& div": {
            textAlign: 'center',
            "@media (max-width:800px)" : {
                width: '25%'
            }
        },
        "@media (max-width: 570px)" : {

        }
    },

})