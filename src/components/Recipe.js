import React from 'react'
import './Recipe.css'

const Recipe = ({ title, img, calories, healthLabels, cuisineType}) => {
  return (
    <div className='recipe-container'>  
      <img src={img} alt={title} />
      <div className="recipe-desc">    
        <div className="recipe-texts">
          <i class="fas fa-utensils"></i>
          <strong className="recipe-type">{cuisineType}</strong>
          <h1 className="recipe-title">{title}</h1>
          <p className='recipe-calroeis'>{calories} kcal</p>
          <p className='recipe-labels'>{healthLabels.slice(0, 2).join(', ')}</p>
        </div>
        <button className="more-btn"><i class="fas fa-arrow-right"></i></button>
      </div>
    </div>
  )
}

export default Recipe
