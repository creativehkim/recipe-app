import React from 'react'
import './Form.css'

const Form = ({ getSearch, onChange, value }) => {
  return (
    <form className='form' onSubmit={getSearch}>
      <div className="input-wrapper">
        <input 
          type="text" 
          className='form-input'
          name='recipeName' 
          onChange={onChange}
          placeholder='Search a recipe'  
          value={value}
          />
        <button className='btn'><i class="fas fa-search"></i></button>
      </div>  
    </form>
  )
}

export default Form
