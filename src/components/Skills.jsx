import React from 'react'
import { skills } from '../data'

const Skills = () => {
  return (
    <>
    {
      skills.map(({title,logo,id})=>(
        <div className="skills__box" key={id}>
          <div className="skills__circle">
            <img src={logo} alt="" className='skills__img' />
          </div>
          <h3 className='skills__title'>{title}</h3>
        </div>
      ))
    }
    </>
  )
}

export default Skills