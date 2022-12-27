import React from 'react'
import CartItem from './CartItem'

const CartLists = ({lists}) => {
  return (
    <div className='wrapper'>
      {lists.map(item => (
        <CartItem item = {item}/>
      ))}
    </div>
  )
}

export default CartLists
