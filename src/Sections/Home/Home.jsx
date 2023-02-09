import React from 'react'

const Home = () => {
  return (
    <section id="home" className='home_section'>
        <p className='home_greet'> Hi, my name is</p>

        <h1 className='home_heading_1'>Ankita</h1>

        <h1 className='home_heading_2'>I built things for the web.</h1>

        <p className="home_desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing 
            elit. Rerum, asperiores quam facere atque et quod voluptates
             deserunt sapiente corrupti magnam totam vero neque nostrum 
             aspernatur blanditiis dolor ut iure reiciendis repudiandae
              omnis aliquam eaque? Sit corporis iste, quaerat rerum, 
              tempora a, culpa voluptatum ipsam facilis veniam quibusdam
               quia officiis ex.
        </p>

        <a href="#work">
            <button className="home_btn">Check out my work!</button>
        </a>

    </section>
  )
}

export default Home
