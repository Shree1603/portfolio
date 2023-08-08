import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../ExperienceBox/Experience'
import './ExperienceContainer.css'
const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='Exp'>
        <h1>EXPERIENCE</h1>
        <div className='experienceContainer__info'>
            <Experience number="2+" title="  Web Development Intern"/>
            <Experience number="4+" title="known Languages" style={{backgroundColor:"#f64c08"}}/>
            <Experience number="5+" title="Workshops Attended"/>
        </div>
    </Element>
  )
}

export default ExperienceContainer
