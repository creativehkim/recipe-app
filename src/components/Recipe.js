import React from 'react'
import './Recipe.css'

const Recipe = ({ title, img, calories, healthLabels, cuisineType, url}) => {
  const handleClick = (e) => {
    if(e.target.classList.contains('far')) {
      e.target.classList.remove('far');
      e.target.classList.add('fas')
    } else {
      e.target.classList.add('far');
      e.target.classList.remove('fas')
    }
    console.log(e.target)
  }

  return (
    <div className='recipe-container'>  
      <div className="recipe-image-wrapper">
        <img src={img} alt={title} />
      </div>
      <div className="recipe-desc">    
        <div className="recipe-texts">
          <div className="text-top">
            <div className="recipe-type">
              <i class="fas fa-utensils"></i>
              <strong>{cuisineType}</strong>
            </div>
            <i className="far fa-heart like-btn" onClick={handleClick}></i>
          </div>
          <h1 className="recipe-title">{title}</h1>
          <p className='recipe-calroeis'>{calories} kcal</p>
          <p className='recipe-labels'>{healthLabels.slice(0, 2).join(', ')}</p>
        </div>
        <a href={url} rel='noreferrer' target="_blank" className="more-btn"><i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  )
}

export default Recipe
