import React from 'react'
import './contact.css'

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";


const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "Yassinesaiq@gmail.com",
    link: "mailto:Yassinesaiq@gmail.com"

  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Yassine Saiq",
    link: "https://m.me/yassinesaiq"

  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "Whatsapp",
    info: "+4917682492751",
    link: "https://api.whatsapp.com/send?phone=4917682492751"

  }

]


function Contact() {
  return (
    <section className='contact' id='contact'>

      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target='_blank'>Send Message</a>
            </article>
          ))}
        </div>

        <form action="">
          <input type="text" placeholder='Your Full Name' name='name' />
          <input type="email" placeholder='Your Email' name='email' />
          <textarea rows={10} name="" id="" placeholder='Your Message'></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
