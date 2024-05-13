import React from 'react'
import { portfolio } from '../../data'
import PortfolioItem from '../../components/PortfolioItem'
import './portfolio.css'
import '../../master.css';
const Portfolio = () => {
  return (
   <section className="porfolio section">
    <h2 className="section__title">
      My <span>Projects</span>
    </h2>
    <div className="portfolio__container grid container">
      {portfolio.map((item)=>(
        <PortfolioItem key={item.id} {...item} />
      ))}
    </div>
   </section>
  )
}

export default Portfolio