import React from 'react'
import Form from './Form'
import './Header.css'

const Header = ({ getSearch, onChange}) => {
  return (
    <div className='header'>
      <h1 className='header-title'>Recipe Search</h1>
      <Form 
        getSearch={getSearch} 
        onChange={onChange}
        />
    </div>
  )
}

export default Header
