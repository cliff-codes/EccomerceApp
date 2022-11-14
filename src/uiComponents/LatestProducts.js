import { Card, Typography, Grid,Container, CircularProgress,Box } from '@mui/material'
import React, {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchItems, reqStatus, items } from '../app/features/latestProducts/latestSlice'
import { colors } from '../styleComponents/colors'
import { nanoid } from '@reduxjs/toolkit'
//components.
import Item from './Item'

const LatestProducts = () => {

  const status = useSelector(reqStatus)
  const productItems = useSelector(items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchItems())
  },[])

  return (
    status === 'loading' ? 
    <Box sx = {{height: '100px', width: '100%',display : 'flex' , justifyContent : 'center', alignItems: 'center'}}>
        <CircularProgress sx={{
          color: `${colors.primary}`
        }}/>
    </Box> : 
    <Container maxWidth = 'lg' sx = {{boxSizing : "border-box"}}>
      <Typography variant = 'h5' align='center' gutterBottom>
        Latest Products
      </Typography>
      <Grid container spacing = {2}>
          {
            productItems.map(item => (
              <Grid item xs = {6} sm = {4} lg = {3}  key = {nanoid(4)}>
                <Item item={item} />
              </Grid>
            ))
          }
      </Grid>
    </Container>
  )
}

export default LatestProducts
