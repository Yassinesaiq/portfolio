import React from 'react'
import './home.css'
import Me from '../../assets/me.png'
import CV from '../../assets/cv.pdf'
import { FaLinkedin } from "react-icons/fa";
import HomeSocials from './Homesocials';


function Home() {
  return (
    <div className='home'> 
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Yassine Saiq</h1>
        <h4 className='text-light'>Junior Full Stack Developer</h4>

        <div className="btns">
          <a href={CV} className='btn'>Download CV</a>
          <a href="#" className='btn btn-primary'>Let's talk</a>
        </div>
     

        <div className="me">
          <img src={Me} alt=""/>
        </div>

        <a href='#about' className='scroll_down'>Scroll Down</a>

        <HomeSocials></HomeSocials>
      </div>
    </div>
  )
}

export default Home
