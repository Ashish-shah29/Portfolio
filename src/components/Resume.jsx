import React from 'react'
import { resume } from '../data'
import Profile from './Profile'
import Education from './Education'
import Skills from './Skills'

const Resume = () => {
  return (
    <div className="resume__container grid">
       <div className="skills__container grid">
      <Skills />
       </div>
      {/* <div className="resume__data">
        {resume.map((val)=>{
          if(val.category=='profile'){
            return (<Profile {...val} key={val.id}/>)
          }
        }
        )}
      </div> */}
      <div className="resume__data">
        {resume.map((val)=>{
          if(val.category=='education'){
            return (<Education {...val} key={val.id}/>)
          }
        }
        )}
      </div>
    </div>
  )
}

export default Resume