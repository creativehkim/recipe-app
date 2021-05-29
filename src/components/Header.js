import React from 'react'
import Form from './Form'
import './Header.css'

const Header = ({ getSearch, onChange, search }) => {
  return (
    <div className='header'>
      <div className="header-bg"></div>
      <h1 className='header-title'>Recipe Search</h1>
      <Form 
        getSearch={getSearch} 
        onChange={onChange}
        value={search}
        />
    </div>
  )
}

export default Header
