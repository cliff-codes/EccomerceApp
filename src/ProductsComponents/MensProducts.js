import React,{useEffect} from 'react'
import CategoryTitle from '../utilityComponents/CategoryTitle'
import { reqStatus, fetchItems, items } from '../app/features/MensProducts/menSlice'
import { useSelector, useDispatch } from 'react-redux'
import Lists from '../utilityComponents/Lists'

//Loader from materail ui
import { CircularProgress } from '@mui/material'

const MensProducts = () => {
    const dispatch = useDispatch()
    const status = useSelector(reqStatus)
    const allItems = useSelector(items)

    useEffect(() => {
        dispatch(fetchItems())
    },[])
    
  return (
      <div className='ProductsWrapper'>
        <CategoryTitle title={"Men's Clothing"}/>
        {
           status === 'loading' ? <CircularProgress/> : <Lists items={allItems} />
        }
    </div>
  )
}

export default MensProducts
