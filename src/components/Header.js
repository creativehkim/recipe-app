import React from 'react'
import Form from './Form'
import './Header.css'

const Header = ({ getSearch, updateSearch}) => {
  return (
    <div className='header'>
      <h1 className='header-title'>Recipe Search</h1>
      <Form 
        getSearch={getSearch} 
        onChange={updateSearch}
        />
    </div>
  )
}

export default Header
