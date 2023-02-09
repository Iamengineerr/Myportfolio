import React from 'react'
import './ContactBar.css'

const ContactBar = () => {
  return (
   <div className='contact_bar_wrapper'>
    <div className="contact_bar">
        <a href="http://" target="_blank" className='contact_bar_icon'>
            LinkedIn
        </a>
        <a href="http://" target="_blank" className='contact_bar_icon'>
            GitHub
        </a>
        <a href="http://" target="_blank" className='contact_bar_icon'>
            Insta
        </a>
        <a href="http://" target="_blank" className='contact_bar_icon'>
        Twitter
        </a>
        <div className='contact_bar_line'></div>
    </div>
    <div className="contact_bar">
        <a href="mailto:ankitaa2229@gmail.com"
        className='contact_bar_email'
        >
            ankitaa2229@gmail.com
        </a>
    </div>
    <div className='contact_bar_line'></div>
   </div>
  )
}

export default ContactBar
