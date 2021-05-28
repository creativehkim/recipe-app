import React from 'react'
import './Form.css'

const Form = ({ getRecipes, onChange}) => {
  return (
    <form className='form' onSubmit={getRecipes}>
      <input 
        type="text" 
        className='form-input'
        name='recipeName' 
        onChange={onChange}/>
      <button className='btn'>Search</button>
    </form>
  )
}

export default Form
