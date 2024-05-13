import React from 'react'

const Profile = ({title,desc,icon,link}) => {
  return (
    <div className="resume__item">
      <div className="resume__icon">{icon}</div>
      <h3 className="resume__subtitle">{title}</h3>
      <a href={link} 
      target='_blank' 
      className="resume__description">
       <img src={desc} alt="" className='resume__img' />
        </a>
    </div>
  )
}

export default Profile