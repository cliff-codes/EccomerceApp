import React,{useState} from 'react'
import { Button } from '@mui/material'
import { removeItem } from '../app/features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({item}) => {
    const dispatch = useDispatch()

    const {image} = item
    const {price} = item
    const {title} = item
    const {quantity} = item
    const {cartId} = item
    const [itemQuantity,setItemQuantity] = useState(quantity)

    const increment = () => {
        setItemQuantity(itemQuantity => itemQuantity + 1)
    }
    const decrement = () => {
        if(itemQuantity > 1){
            setItemQuantity(itemQuantity => itemQuantity - 1)
        }
    }

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
            }}
                //delete Item
                onClick = {() => {
                    dispatch(removeItem(cartId))
                }}
            >
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
                }} className = "ctrlBtn"
                onClick={decrement}
                >-</Button>
            <div className='value'>{itemQuantity}</div>
            <Button variant='contained' sx={{
                minWidth: "0px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: '#f1f1f1',
                color: "#707070"
            }} className = "ctrlBtn"
            onClick={increment}
            >+</Button>
        </div>
        <div className='price'>{`$${price * itemQuantity}`}</div>
      </div>

    </div>
  )
}

export default CartItem
