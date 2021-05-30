import React from 'react'
import Form from './Form'
import './Header.css'
import logoImg from '../assets/logo-img.png'

const Header = ({ getSearch, onChange, search }) => {
  return (
    <div className='header'>
      <div className="header-bg"></div>
      <div className="logo-container">
        <h1 className='header-title'>Recipe<br />Genie</h1>
        <img className='logo-img' src={logoImg} alt="logo" />
      </div>
      <Form 
        getSearch={getSearch} 
        onChange={onChange}
        value={search}
        />
    </div>
  )
}

export default Header
