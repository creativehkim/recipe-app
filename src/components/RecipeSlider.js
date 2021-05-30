import React from 'react'
import Recipe from './Recipe';
import './RecipeSlider.css'

const RecipeSlider = ({ recipes }) => {
  return (
    <div className='recipe-slider-container'>  
    {recipes.map((recipe) => (
        <Recipe 
          key={Math.random(Date.now())}
          title={recipe.recipe.label}
          img={recipe.recipe.image}
          calories={recipe.recipe.calories.toFixed(2)}
          healthLabels={recipe.recipe.healthLabels}
          cuisineType={recipe.recipe.cuisineType}
          url={recipe.recipe.url}
        />
    ))}
    </div>
  )
}

export default RecipeSlider
