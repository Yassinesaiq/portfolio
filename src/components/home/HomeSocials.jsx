import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HomeSocials (){
    return(
        <div className='home_socials'>
            <a href="https://www.linkedin.com/in/yassine-s-582249138" target='_blank'><FaLinkedin /></a>
            <a href="https://github.com/yassinesaiq" target='_blank'><FaGithub /></a>
        </div>
    )
}

export default HomeSocials