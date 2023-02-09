import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className='contact_section'>
        <div className='contact_heading_1'></div>
        <h1 className='contact_heading_2'>Get in touch</h1>
        <p className='contact_desc'>
            Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Debitis, impedit consequatur 
            architecto saepe autem facilis veniam sequi 
            voluptatibus sunt expedita fugiat consectetur 
            repudiandae vero sed! Tenetur ut minus amet dolores!
        </p>
        <a href="mailto:ankitaa2229@gmail.com">
            <buton className="contact_btn">Say hello</buton>
        </a>
    </section>
  )
}

export default Contact
