import React, { useState } from 'react'
import PortfolioItemModal from './PortfolioItemModal';
const PortfolioItem = (props) => {
  const {img,title} = props
  const [portfolioItemModal,setPortfolioItemModal] = useState(false);
  const toggleModal = ()=>{
    setPortfolioItemModal(!portfolioItemModal);
  }
  return (
    <div className='portfolio__item'>
      <h4 className='portfolio__img-title'>{title}</h4>
      <img src={img} alt="" className='portfolio__img'/>
      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
        <h2 className='portfolio__title'>Click Me</h2>
      </div>

      {
        portfolioItemModal && (
          <PortfolioItemModal modalData= {props} toggleModal={toggleModal} />
        )
      }
    </div>

  )
}

export default PortfolioItem