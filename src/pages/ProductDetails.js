import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import SideNav from '../utilityComponents/SideNav'
import { getItem, reqStatus, item } from '../app/features/singleItem/singleItemSlice'
import { useDispatch, useSelector } from 'react-redux'

//Styled compoments from materail ui
import { CardMedia, CircularProgress } from '@mui/material'

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

    useEffect(() => {
      dispatch(getItem(ItemProps))
    }, [])

    return (
    <section style={
      {
        flexGrow: 2,
        display: 'flex',
        alignItems: "baseline",
        gap: '10px'
      }
    }>
      <div>
        <SideNav/>
      </div>
      <h2>
        {
          status === 'loading' ? <CircularProgress/> : <section>
            <div className='ItemImg'>
              <CardMedia image={`${image}`} sx = {{
                paddingTop: '56.25%'
              }}/>
            </div>
          </section>
        }
      </h2>
    </section>
  )
}

export default ProductDetails
