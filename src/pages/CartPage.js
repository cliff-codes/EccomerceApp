import { Typography } from '@mui/material'
import React from 'react'
import SideNav from '../utilityComponents/SideNav'
import './cartPage.css'
import { totalItems } from '../app/features/cart/cartSlice'
import { useSelector } from 'react-redux'
import CartLists from '../utilityComponents/CartLists'

const CartPage = () => {
    const items = useSelector(totalItems)

  return (
    <section className='cartPage'>
        <SideNav/>
        <section className='cartSection'>
            <Typography variant='h6'>Your Cart</Typography>
            {/* List cart Items */}
           <div className='listsSection'>
            {items.length === 0 ? <Typography>
                    Your cart is Empty
                </Typography> : <CartLists lists={items}/>}
           </div>
        </section>
    </section>
  )
}

export default CartPage
