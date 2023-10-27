import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    footerContainer: {
        width: '100%',
        height: '40px',
        backgroundColor: '#bcfcf6',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        fontSize: '0.9rem'
    }
})

function Footer() {
    const classes = useStyles()
  return (
    <div id="Footer" className={classes.footerContainer}>
            <span>© Copyright 2023 | Anthony McLean</span>
            <span>Made with ReactJS</span>
    </div>
  )
}

export default Footer