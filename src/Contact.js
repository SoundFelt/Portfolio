import React, {useState} from 'react';
import {useStyles} from './styles/ContactStyles'
import emailjs from '@emailjs/browser';
import emailLogo from './images/emailLogo.png'
import './Contact.css'

function Contact() {
    const classes = useStyles()

    const [values, setValues] = useState({fullName: '', email: '', message: ''})
    const [messageSubmitted, setMessageSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const res = await emailjs.send('service_oy3acac', 'contact_form', values, 'user_MGZK3YXE2haM8nsBL7UMW');
        setLoading(false)
        setMessageSubmitted(true)
        setValues({fullName: '', email: '', message: ''})
        setTimeout(() => {
            setMessageSubmitted(false)
        }, 10000)
    }



  return (
    <div id="Contact" className={classes.contactContainer}>
        <h1 className={classes.title}>Contact</h1>
        <p className={classes.subTitle}>Please get in touch with me via email or by using the contact form below.</p>
        <div className={classes.email}>
            <img src={emailLogo}></img>
            <a href="mailto:anthony.webcode@gmail.com">anthony.webcode@gmail.com</a>
        </div>
        <form onSubmit={handleSubmit} className={classes.contactForm}>
            <input value={values.fullName} required type="text" name="fullName" onChange={handleChange} placeholder="Your Name/Company Name"/>
            <input value={values.email} required type="email" name="email" onChange={handleChange} placeholder="Your Email"/>
            <textarea value={values.message} required name="message" name="message" onChange={handleChange} minLength="10" placeholder="Message"></textarea>
            {messageSubmitted && <div className={classes.successMessage}><p>Thank you for your message, I'll get back to you shortly!</p></div>}
            <button className={classes.submitButton}>{loading ? <div className="loader"></div>: 'Submit'}</button>
            
        </form>
        
    </div>
  )
}

export default Contact;
