import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import SideNav from '../utilityComponents/SideNav'
import { getItem, reqStatus, item } from '../app/features/singleItem/singleItemSlice'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
//from cartSlice
import { addToCart } from '../app/features/cart/cartSlice'

//Styled compoments from materail ui
import { Button, Card, CardMedia, CircularProgress, Typography } from '@mui/material'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
//custom css styles.
import './ProductDetails.css'

const ProductDetails = () => {
    const dispatch = useDispatch()

    const {id} = useParams()
    const itemUrl = `https://fakestoreapi.com/products/${id}`
    const ItemProps = {itemUrl}
    const status = useSelector(reqStatus)
    const selectedeItem = useSelector(item)
    const {image} = selectedeItem
    const {price} = selectedeItem
    const {title} = selectedeItem
    const {description} = selectedeItem
    /*
    const rate = selectedeItem.rating.rate
    const count = selectedeItem.rating.count
    */
    //the amount of an item to be added to the cart.
    const [counter,setCounter] = useState(1)
    //increase count value
    const increment = () => setCounter(counter => counter + 1)
    //decrease count value
    const decrement = () => counter > 1 ? setCounter(counter => counter - 1) : null

    useEffect(() => {
      dispatch(getItem(ItemProps))
    }, [])

    return (
    <section style={
      {
        flexGrow: 2,
        display: 'flex',
        gap: '10px',
      }
    }>
      <div>
        <SideNav/>
      </div>
      <>
        {
          status === 'loading' ? <CircularProgress/> : <section className='detailsSection'>
            <div className='ItemImg'>
              
                <CardMedia className='cardImg' sx = {{
                  paddingTop: '56.25%',
                  backgroundSize: 'contain',
                  width: "350px",
                  height: "auto",
              }}  image = {`${image}`}/>
            </div>

            <div>
            <Typography variant='h6'>
              {`${title}`}
            </Typography>
            <Typography className='price'>
              {`$${price}`}
            </Typography>
            <Typography className='ratings'>
              <div>Ratings:</div>
              <StarRateRoundedIcon/>
              {/*<div>{`${rate}  (${count})`}</div>*/}
            </Typography>
            <Typography className='description'>
              {description}
            </Typography>

            <div className='cartControllers'>
              <div className='quantity'>
                <div>Quantity :</div> 
                <div>
                  <Button className='roundBtn' onClick={decrement} sx = {{
                    padding: "0",
                    height: "30px",
                    maxWidth: "20px",
                    background: "#f1f1f1"  
                  }}>
                    -
                  </Button>
                </div>
                <div>{counter}</div>
                <div>
                  <Button className='roundBtn' onClick={increment} sx = {{
                    padding: "0",
                    height: "30px",
                    maxWidth: "20px",
                    background: "#f1f1f1"  
                  }}>
                    +
                  </Button>
                </div>
              </div>

              <div className='addToCartBtn'>
                <Button variant='contained' sx={{
                  borderRadius: "13px"
                }} onClick = {
                  () => dispatch(addToCart({
                    ...selectedeItem,
                    cartId: nanoid(4),
                    quantity: counter
                  }))
                }>Add To Cart</Button>
              </div>
            </div>
            </div>
          </section>
        }
      </>
    </section>
  )
}

export default ProductDetails
