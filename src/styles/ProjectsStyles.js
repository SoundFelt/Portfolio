import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
    projectsContainer: {
        backgroundColor: '#EFFAF9',
        height: '100%',
        width: '100%'
    },
    projectsTitleContainer: {
        textAlign: 'center',
        marginBottom: '40px',
        "@media (min-width: 1367px)" : {
            fontSize: '1.5rem',
            paddingBottom: '50px'
        },
        "@media (max-width: 800px)" : {
            margin: '0'
        }
    },
    projectsTitle: {
        display: 'inline-block',
        position: 'relative',
        margin: '0',
        paddingTop: '20px', 
    },
})