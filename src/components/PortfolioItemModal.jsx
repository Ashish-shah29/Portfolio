import React from 'react'
import Close from '../assets/close.svg'

const PortfolioItemModal = ({modalData,toggleModal}) => {
  const {img,title,details,description} = modalData;
  return (
    <div className="portfolio__modal">
        <div className="portfolio__modal-content">
          <img src={Close} alt="" 
          className="modal__close" 
          onClick={toggleModal}
          />
          <h3 className="modal__title">{title}</h3>
          <ul className="modal__list grid">
            {details.map(({icon,title,desc,link},index)=>(
              // <li className="modal__item" key={index}>
                <a 
                 href={link}
                 className='modal__item' 
                 target='_blank'
                 key={index}>
                <span className="item__icon">{icon}</span>
                <div>
                  <span className="item__title">{title}</span>
                  <span className="item__details">{desc}</span>
                </div>
                </a>
              // </li>
            ))}
          </ul>
          {/* <img src={img} alt="" className='modal__img' /> */}
          <div className='desc__box'>
            <h3 className='desc__title'>Project Description</h3>
            {
              description.map((item,index)=>(
                <p key={index} className='desc__item'>
                  {item}
                </p>
              ))
            }
          </div>
        </div>
      </div>
  )
}

export default PortfolioItemModal