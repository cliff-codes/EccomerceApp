import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import useMediaQuery from 'react-use-media-query-hook'

//styles.
import './sideNav.css'

//link Styles
const linkStyle = {
  textDecoration: 'none',
  color: '#161616'
}

const SideNav = () => {
  const isTablet = useMediaQuery('(min-width: 401px) and (max-width: 640px)')
  return (
    isTablet ? null : 
    <>
        <div className='sideNav'>
          <Typography variant='h6'>
            Categories
          </Typography>
        <div className='links'>
          <Link to = '/' style={linkStyle}>
            <Typography>
              Men's Clothing
            </Typography>
          </Link>
          <Link to = '/' style={linkStyle}>
            <Typography>
              Women's Clothing
            </Typography>
          </Link>
          <Link to = '/' style={linkStyle}>
            <Typography>
              Electronics
            </Typography>
          </Link>
          <Link to = '/' style={linkStyle}>
            <Typography>
              Jewellery
            </Typography>
          </Link>
        </div>
        <div className='filterSection'>
          <Typography variant='h6'>
              Filter
            </Typography>

          <div className='priceRange'>
          <input type='range' id = 'price' name='price' min='0' max = "1000"/>
          </div>
          <div className='prices'>
            <div className='lowest'>
              $10
            </div>
            <div className='highest'>
              $1000
            </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default SideNav
