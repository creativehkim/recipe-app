import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import Recipe from './Recipe';

// import SwiperCore, {
//   EffectCoverflow,Pagination
// } from 'swiper/core';
// SwiperCore.use([EffectCoverflow, Pagination]);


const RecipeSlider = ({ recipes }) => {
  return (
    <div>
      <Swiper 
      //   effect={'coverflow'} 
      //   grabCursor={true} 
      //   centeredSlides={true} 
      //   spaceBetween={40}
      //   loop={true}
      //   slidesPerView={'auto'} 
      //   coverflowEffect={{
      //     "rotate": 50,
      //     "stretch": 0,
      //     "depth": 100,
      //     "modifier": 1,
      //     "slideShadows": true
      // }} pagination={{"clickable": true}} className="mySwiper"
      >
  
    {recipes.map((recipe) => (
      <SwiperSlide>
      <Recipe 
        key={Date.now()}
        title={recipe.recipe.label}
        img={recipe.recipe.image}
        calories={recipe.recipe.calories.toFixed(2)}
        healthLabels={recipe.recipe.healthLabels}
        cuisineType={recipe.recipe.cuisineType}/>
      </SwiperSlide>
    ))} 
  
</Swiper>
    </div>
  )
}

export default RecipeSlider
