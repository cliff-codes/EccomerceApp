import { Button } from '@mui/material'
import React from 'react'

const CartItem = ({item}) => {

    const {image} = item
    const {price} = item
    const {title} = item
    const {quantity} = item

  return (
    <div className='item'>
      <div className='image'>
        <img src={`${image}`}/>
      </div>
      <div className='nameAndRemove'>
        <div className='name'>
            {title}
        </div>
        <div className='removeBtn'>
            <Button variant='contianed' sx={{
                textTransform : "lowercase",
                backgroundColor: "#161616",
                color: "#ffffff",
                height: "25px",
                borderRadius: "12px"
            }}>
                remove
            </Button>
        </div>
      </div>

      <div className='controlAndPrice'>
        <div className='controls'>
            <Button variant='contained' sx={{
                minWidth: "0px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: '#f1f1f1',
                color: "#707070",
                }} className = "ctrlBtn">-</Button>
            <div className='value'>{quantity}</div>
            <Button variant='contained' sx={{
                minWidth: "0px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: '#f1f1f1',
                color: "#707070"
            }} className = "ctrlBtn"
            >+</Button>
        </div>
        <div className='price'>{`$${price * quantity}`}</div>
      </div>

    </div>
  )
}

export default CartItem
