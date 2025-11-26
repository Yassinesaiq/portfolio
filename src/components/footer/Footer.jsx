import React from 'react'
import './footer.css'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <footer>
      <a href="" className='footer_logo'>Yassine Saiq</a>

      <ul className='permalinks'>
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#skills">Skills</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#projects">Projects</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="" target="_blank"><FaInstagram /></a>
        <a href="" target="_blank"><FaFacebook /></a>
        <a href="" target="_blank"><FaTwitter /></a>
      </div>


      <div className="footer_copyright">
        <small>&copy; <a href="#">YassineSaiq </a>All rights reserved</small>
      </div>


    </footer>
  )
}

export default Footer
