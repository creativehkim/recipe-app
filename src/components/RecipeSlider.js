import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import Recipe from './Recipe';

import SwiperCore, {
  Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);


const RecipeSlider = ({ recipes }) => {
  return (
    <div>
      <Swiper 
        // centeredSlides={true} 
        // spaceBetween={10}
        // loop={true}
        // slidesPerView={'auto'} 
      >
  
    {recipes.map((recipe) => (
      <SwiperSlide>
      <Recipe 
        key={Date.now()}
        title={recipe.recipe.label}
        img={recipe.recipe.image}
        calories={recipe.recipe.calories.toFixed(2)}
        healthLabels={recipe.recipe.healthLabels}
        cuisineType={recipe.recipe.cuisineType}
        url={recipe.recipe.url}
      />
      </SwiperSlide>
    ))} 
  
</Swiper>
    </div>
  )
}

export default RecipeSlider
