import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import { useStyles } from '../styleComponents/useStyles'
//ui components
import LatestProducts from './LatestProducts'


const SharedLayout = () => {
  const {classes} = useStyles()
  return (
    <div className={classes.layoutStyles}>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default SharedLayout
