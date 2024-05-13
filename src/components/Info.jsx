import React from 'react'
import {personalInfo} from '../data.jsx'
const Info = () => {
  return (
    <>
    {personalInfo.map(({title,description,id})=>(
      <li className='info__item' key={id}>
       <span className='info__title'>{title}</span>  
       <span className='info__description'>{description}</span>
      </li>
    ))}
    </>
  )
}

export default Info