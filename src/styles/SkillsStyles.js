import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    skillsContainer: {
        width: '100%',
        height: '600px',
        backgroundColor: '#0D1431',
    },
    skillsContent: {
        display: 'flex',
        flexDirection: 'column',   
        justifyContent: 'space-around',
        "@media (max-width: 800px)" : {
            justifyContent: 'center',
            paddingTop: '240px'
        },
        height: '250px',
        paddingBottom: '15px',
        paddingTop: '40px'
    },
    titleContainer: {
        height: '50px',
        marginBottom: '100px',
        "@media (min-width: 1367px)" : {
            fontSize: '1.5rem',
        },
        "@media (max-width: 800px)": {
            marginBottom: '0'
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
                width: '25%',
                marginTop: '50px'
            }
        },
    },
    skillsOther: {
        margin: '50px auto 0', 
        padding: '0 25px', 
        textAlign: 'center',
        fontSize: '1.3rem',
        color: 'white',
        "@media (max-width:800px)": {
            margin: '230px auto 0',
            fontSize: '18px'
        }
    }
})