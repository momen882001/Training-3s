import React from 'react'
import './About.css'
import imgLeft from '../../assets/About us.svg'

const About = () => {
  return (
    <>
    <div className="about-contain" id='about'>
      <section className="img-side">
        <img src={imgLeft} alt="" />
      </section>

      <section className="about-content">
        <h3 data-aos="fade-right" >About Us</h3>
        <div className="seperator"></div>
        <p data-aos="fade-right">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quas illum repudiandae aliquam consequatur explicabo accusantium ipsum?
          Expedita pariatur delectus dicta harum corporis nisi,
          assumenda aspernatur voluptate! Ipsa,
          temporibus maxime! Rem!</p>
        <button data-aos="zoom-out" >Learn more</button>
      </section>

    </div>
    <div className="separator-section"></div>
    </>
  )
}

export default About