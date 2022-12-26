import React from 'react'
import './logo.css'
import { Link } from 'react-router-dom'

const Logo = ({logoColor}) => {
  const LOGOSTYLE = {
    color:  `${logoColor}`,
    textDecoration: 'none'
  }
  return (
    <div className='logo'>
      <Link to = '/' style={LOGOSTYLE}>ShopZy</Link>
    </div>
  )
}

export default Logo
