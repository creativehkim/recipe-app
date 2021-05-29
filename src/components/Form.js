import React from 'react'
import './Form.css'

const Form = ({ getSearch, onChange }) => {
  return (
    <form className='form' onSubmit={getSearch}>
      <div className="input-wrapper">
        <input 
          type="text" 
          className='form-input'
          name='recipeName' 
          onChange={onChange}/>
          
        <button className='btn'><i class="fas fa-search"></i></button>
      </div>  
    </form>
  )
}

export default Form
