import React from 'react'
import { useParams } from 'react-router-dom'
import SideNav from '../utilityComponents/SideNav'

const ProductDetails = () => {
    const {id} = useParams()

    return (
    <section style={
      {
        flexGrow: 2,
        display: 'flex',
        alignItems: "baseline",
        gap: '10px'
      }
    }>
      <div>
        <SideNav/>
      </div>
      <h2>{id}</h2>
    </section>
  )
}

export default ProductDetails
