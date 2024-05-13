import React, { useState } from 'react'
import { links } from '../data'
import { NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import './navbar.css'
const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
   <nav className="nav">
    <div className={`${showMenu ? "nav__menu show-menu":"nav__menu"}`}>
      <ul className="nav__list">
        {
          links.map(({name,icon,path},index)=>(
            <li className="nav__item" key={index}>
              <NavLink 
              to={path} 
              className={({isActive})=> isActive ? "nav__link active-nav":"nav__link"}
              onClick={()=>setShowMenu(!showMenu)}
              >

               <div className="nav__icon">{icon}</div> 
                <h3 className='nav__name'>{name}</h3>
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
    <div
     className="nav__toggle"
     onClick={()=>setShowMenu(!showMenu)}
    >
      {
        showMenu ? (<RxCross1 fontSize={24} />)
        :(<FiMenu fontSize={24} />)
      }
      
    </div>
   </nav>
  )
}

export default Navbar