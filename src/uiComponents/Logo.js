import React from 'react'
import './logo.css'

const Logo = ({logoColor}) => {
  const LOGOSTYLE = {
    color:  `${logoColor}`
  }
  return (
    <div className='logo' style={LOGOSTYLE} >
      ShopZy
    </div>
  )
}

export default Logo
