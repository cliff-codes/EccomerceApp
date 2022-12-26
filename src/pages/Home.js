import React from 'react'
import Showcase from '../uiComponents/Showcase'
import FeaturedProducts from '../ProductsComponents/FeaturedProducts'
import SideNav from '../utilityComponents/SideNav'

import './Home.css'
import MensProducts from '../ProductsComponents/MensProducts'
const Home = () => {
  return (
    <section className='homeSection'>
        <Showcase/>
        <section className='mainSection'>
            <SideNav/>
            <div className='productsSection'>
              <FeaturedProducts/>
              <MensProducts/>
            </div>
        </section>
    </section>
  )
}

export default Home
