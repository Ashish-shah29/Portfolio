import React from 'react'
import Profile from '../../assets/myImage.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import '../../master.css';
import './home.css'
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} className='home_img' alt="" />
      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>Hey 👋,I'm Ashish.</span>
            MERN Developer
          </h1>
          <p className="home_description">
            I am student of Web Technologies which includes React , Express , Node Js ,MongoDB and Tailwind Css . I am improving my skills to a competent level through multiple projects and contributions. Let's collaborate and create something remarkable together.
          </p>
          <Link to='/about' className='button'>
            More About Me<span className="button_icon">
            <FaArrowRight className='text-center'/>
            </span>
          </Link>
        </div>
      </div>
      <section className="color_block"></section>
    </section>
  )
}

export default Home