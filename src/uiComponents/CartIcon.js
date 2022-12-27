import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Badge } from '@mui/material'
import { totalItems } from '../app/features/cart/cartSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartIcon = () => {
  const totalNumber = useSelector(totalItems).length

  return (
    <Link to = '/cart' style={{
      textDecoration: 'none'
    }}>
      <Badge badgeContent = {`${totalNumber}`} color = "primary">
        <ShoppingCartOutlinedIcon/>
      </Badge>
    </Link>
  )
}

export default CartIcon
