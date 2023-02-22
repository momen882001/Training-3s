import React from 'react'
import './Contact.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faInstagram, faGithub, faTwitter, faTelegram,faLinkedin,faFacebook } from "@fortawesome/free-brands-svg-icons";
import { GoLocation } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';


const Contact = () => {
  return (
    <section id='contact'>
    <div className="footer">
      <div className="container">
        <div className="box">
          <h3>Mo'men Mohamed</h3>
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
          </p>
        </div>
        <div className="box">
          <ul className="links">
            <li><a href="#"><HiOutlineArrowCircleRight style={{marginRight:"10px"}}/>Important Link 1</a></li>
            <li><a href="#"><HiOutlineArrowCircleRight style={{marginRight:"10px"}}/>Important Link 2</a></li>
            <li><a href="#"><HiOutlineArrowCircleRight style={{marginRight:"10px"}}/>Important Link 3</a></li>
            <li><a href="#"><HiOutlineArrowCircleRight style={{marginRight:"10px"}}/>Important Link 4</a></li>
            <li><a href="#"><HiOutlineArrowCircleRight style={{marginRight:"10px"}}/>Important Link 5</a></li>
          </ul>
        </div>
        <div className="box">
          <div className="line">
            <GoLocation style={{marginRight:"10px",marginBottom:"10px"}} size={25}/>
            <div className="info">Egypt, Giza, Inside The Sphinx, Room Number 220</div>
          </div>
          <div className="line">
            <BiTime style={{marginRight:"10px",marginBottom:"10px"}} size={25}/>
            <div className="info">Business Hours: From 10:00 To 18:00</div>
          </div>
          <div className="line">
            <BsTelephone style={{marginRight:"10px",marginBottom:"10px"}} size={25}/>
            <div className="info">
              <span>+20123456789</span>
              <span>+20198765432</span>
            </div>
          </div>
        </div>
        <div className="box">
        <ul className="social">
              <li className='facebook'>
                <Link to="/">
                  <FontAwesomeIcon icon={faFacebook} color="white" size="lg" />
                </Link>
              </li>
              <li className='linkedin'>
                <Link to="/">
                  <FontAwesomeIcon icon={faLinkedin} color="white" size="lg" />
                </Link>
              </li>
              <li className='instagram'>
                <Link to="/">
                  <FontAwesomeIcon icon={faInstagram} color="white" size="lg" />
                </Link>
              </li>
            </ul>
        </div>
      </div>
      <p className="copyright">3s @2023</p>
    </div>
    </section>
  )
}

export default Contact