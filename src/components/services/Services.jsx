import React from 'react'
import './services.css'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";


function Services() {
  return (
    <section id="services">
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container container_services">
          <article className='Card'>
            <MdDesignServices className='icon'/>
            <h3>Web MdDesign</h3>
            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut exercitationem libero ducimus? Quod error et in inventore, totam, quisquam enim, nesciunt rerum excepturi ipsa quibusdam tenetur est voluptates nobis!</p>
          </article>
          <article className='Card'>
            <IoIosRocket  className='icon'/>
            <h3>Fast Performence</h3>
            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut exercitationem libero ducimus? Quod error et in inventore, totam, quisquam enim, nesciunt rerum excepturi ipsa quibusdam tenetur est voluptates nobis!</p>
          </article>
          <article className='Card'>
            <FaCode  className='icon'/>
            <h3>Clean Code</h3>
            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut exercitationem libero ducimus? Quod error et in inventore, totam, quisquam enim, nesciunt rerum excepturi ipsa quibusdam tenetur est voluptates nobis!</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services

