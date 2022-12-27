import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Badge } from '@mui/material'
import { totalItems } from '../app/features/cart/cartSlice'
import { useSelector } from 'react-redux'

const CartIcon = () => {
  const totalNumber = useSelector(totalItems).length

  return (
    <div>
      <Badge badgeContent = {`${totalNumber}`} color = "primary">
        <ShoppingCartOutlinedIcon/>
      </Badge>
    </div>
  )
}

export default CartIcon
