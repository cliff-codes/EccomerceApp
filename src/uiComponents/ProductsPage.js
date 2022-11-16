import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Container, Grid, CircularProgress} from '@mui/material'
import Item from './Item'
import { fetchProducts, reqStatus,setReqStatus, productItems } from '../app/features/allProducts/productSlice'
import { useStyles } from '../styleComponents/useStyles'
import { colors } from '../styleComponents/colors'
import { nanoid } from '@reduxjs/toolkit'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const status = useSelector(reqStatus)
  const items = useSelector(productItems)
  //styles
  const {classes} = useStyles()

  useEffect(() => {
    if(status === 'idle'){
      dispatch(fetchProducts())
      dispatch(setReqStatus('idle'))
    }
  },[])

  return (
    <Container maxWidth = 'lg' sx = {{marginTop: '40px'}}>
      {
        status === 'loading' ? <Grid  className={classes.centerItems} sx = {{justifyContent: 'center'}}>
        <CircularProgress sx={{color: colors.primary}}/>
      </Grid> :
      <Grid container spacing = {3} >
        {
          items.map(item => (
            <Grid item key={nanoid(4)} xs = {6} sm = {4} lg = {3}>
              <Item item={item}/>
            </Grid>
          ))
        }
      </Grid>
      }
    </Container>
  )
}

export default ProductsPage
