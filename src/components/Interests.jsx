import React from 'react'
import {interests} from '../data'
const Interests = () => {
  return (
    <>
      {
        interests.map(({title,description,id})=>(
          <div className='interest__box' key={id}>
            <h3 className='interest__title'>{title}</h3>
            <p className='interest__desc'>{description}</p>
          </div>
        ))
      }
    </>
  )
}

export default Interests