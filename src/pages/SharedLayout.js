import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import Footer from '../uiComponents/Footer'
import Nav from '../uiComponents/Nav'

const SharedLayout = () => {
  return (
    <>
      <Container maxWidth = 'lg' sx = {
        {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }
      }>
        <Nav/>
        <Outlet/>
        <Footer/>
      </Container>
    </>
  )
}

export default SharedLayout
