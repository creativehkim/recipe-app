import React from 'react'
import Form from './Form'
import './Header.css'

const Header = ({getRecipes, updateSearch}) => {
  return (
    <div className='header'>
      <h1 className='title'>Recipe Search</h1>
      <Form getRecipes={getRecipes} onChange={updateSearch}/>
    </div>
  )
}

export default Header
