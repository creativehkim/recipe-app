import React from 'react'

const Recipe = ({ title, img, calories}) => {
  return (
    <div>
      <h1 className="recipe-title">{title}</h1>
      <p className='recipe-calroeis'>{calories} kcal</p>
      <img src={img} alt="" />
    </div>
  )
}

export default Recipe
