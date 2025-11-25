import React from 'react'
import './skills.css'
import CSS from '../../assets/css3.svg'
import Python from '../../assets/python.png'
import Figma from '../../assets/figma.svg'
import Javascript from '../../assets/javascript.svg'
import Mysql from '../../assets/mysql.png'
import Django from '../../assets/django.webp'
import ReactJS from '../../assets/react.svg'
import Bootstrap from '../../assets/bootstrap.png'

const SkillsData = [
  {
    id: 1,
    image: CSS,
    title: 'CSS',
    disc: "User Interface"
  },
  {
    id: 2,
    image: Javascript,
    title: 'JavaScript',
    disc: 'Interaction'

  },
  {
    id: 3,
    image: ReactJS,
    title: 'React',
    disc: 'Framwork'

  },
  {
    id: 4,
    image: Bootstrap,
    title: 'Bootstrap',
    disc: 'User Interface',

  },
  {
    id: 5,
    image: Python,
    title: 'Python',
    disc: 'Backend'

  },
  {
    id: 6,
    image: Django,
    title: 'Django',
    disc: 'Backend Framwork',

  },
  {
    id: 7,
    image: Figma,
    title: 'Figma',
    disc: 'Design tool'

  },
  {
    id: 8,
    image: Mysql,
    title: 'MySql',
    disc: 'Database'

  },
 

]


function Skills() {
  return (
    <section className='skills'>
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container container_skills">

        {SkillsData.map(({ id, image, title, disc }) => (
          <article className="card_skill">
            <div className="icon">
              <img src={image} alt="" />
            </div>
            <div className="content">
                <h4>{title}</h4>
                <p className='text-light'>{disc}</p>
              </div>
          </article>
        ))}

      </div>
    </section>
  )
}

export default Skills
