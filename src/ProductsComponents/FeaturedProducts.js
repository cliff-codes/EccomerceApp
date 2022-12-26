import React from 'react'
import CategoryTitle from '../utilityComponents/CategoryTitle'
import '../utilityComponents/CategoryTitle'
import { useSelector, useDispatch } from 'react-redux'
import { reqStatus,fetchProducts, featuredItems } from '../app/features/featuredProducts/featuredProdSlice'
import Lists from '../utilityComponents/Lists'
//styling from material ui
import { CircularProgress } from '@mui/material'


const FeaturedProducts = () => {
  const dispatch = useDispatch()
  const status = useSelector(reqStatus)
  const items = useSelector(featuredItems)
  try {
    if(status === 'idle'){
      dispatch(fetchProducts())
    }
  } catch (error) {
    console.log(error)
  }
  return (
    <div className='ProductsWrapper'>
        <CategoryTitle title={'Featured Products'}/>
        {
          status === 'loading' ? <CircularProgress/> : <Lists items={items} />
        }
    </div>
  )
}

export default FeaturedProducts
