import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    contactContainer: {
        backgroundColor: '#0D1431',
        height: '100%',
        paddingBottom: '40px',
    },
    title: {
        margin: '0',
        textAlign: 'center',
        color: 'white',
        paddingTop: '30px',
        "@media (min-width: 1367px)" : {
            fontSize: '3rem'
        }
    },
    subTitle: {
        color: 'white',
        textAlign: 'center',
        "@media (min-width: 1367px)" : {
            fontSize: '1.5rem'
        }
    },
    email: {
        textAlign: 'center',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        "& a": {
            margin: '0',
            paddingBottom: '5px',
            "@media (min-width: 1367px)" : {
                fontSize: '1.5rem'
            }
        },
        "& img" : {
            height: '25px',
            width: '25px',
            marginRight: '10px',
        }
    },
    contactForm: {
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        margin: '0 auto',
        "& input" : {
            marginBottom: '15px',
            height: '35px',
            fontSize: '1.1rem',
        },
        "& textarea" : {
            height: '200px',
            marginBottom: '15px',
            fontSize: '1.1rem'
        }
    },
    successMessage: {
        marginTop: '10px',
        marginBottom: '20px',
        color: 'white',
        textAlign: 'center',
        fontSize: '0.9rem',
        "& p": {
            border: '1px solid green',
            width: '90%',
            margin: '0 auto',
            padding: '10px',
            backgroundColor: 'rgb(22, 110, 22)',
            borderRadius: '3px'
        }
    },
    submitButton: {
        padding: '5px',
        fontSize: '1.1rem',
        width: '40%',
        margin: '0 auto',
        fontWeight: 'bold',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        "&:hover" : {
            backgroundColor: 'rgb(209, 209, 209)',
        }
    }
})