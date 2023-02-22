import React from 'react'
import './About.css'
import imgLeft from '../../assets/About us.svg'

const About = () => {
  return (
    <div className="about-contain" id='about'>

      <section className="about-content">
        <h3>About Us</h3>
        <div className="seperator"></div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quas illum repudiandae aliquam consequatur explicabo accusantium ipsum?
          Expedita pariatur delectus dicta harum corporis nisi,
           assumenda aspernatur voluptate! Ipsa,
          temporibus maxime! Rem!</p>
      </section>
      
      <section className="img-side">
        <img src={imgLeft} alt="" />
      </section>
    </div>
  )
}

export default About