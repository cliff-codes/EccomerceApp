import { Container,Box, CardMedia, ButtonBase, Typography } from '@mui/material'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import React from 'react'
import { useSelector } from 'react-redux'
import { items } from '../app/features/latestProducts/latestSlice'
import { useParams } from 'react-router-dom'
import { useStyles } from '../styleComponents/useStyles'
import CounterBtn from '../utilityComponents/CounterBtn';
import { colors } from '../styleComponents/colors';
import LatestProducts from './LatestProducts';

const LatestItemDetails = () => {
    const products = useSelector(items)
    const {id} = useParams()
    const selectedItem = products[id-1]
    console.log(selectedItem)
    const {image, price, rating, title, description } = selectedItem
    const {classes} = useStyles()
  return (
    <>
        <Container>
            <Box sx = {{padding: '30px 0 20px 0'}}>
                <Box >
                    <CardMedia image={image} className = {classes.cardImgStyle}/>
                </Box>
                <Box>
                    <Box>{`${title}`}</Box>
                    <Box >Reviews : <StarRateRoundedIcon sx = {{color: 'gold'}}/>{` ${rating.rate}`}</Box>
                </Box>
                <Box>
                    <Box>
                        <CounterBtn btnOperator={'-'} />
                        <Box>{2}</Box>
                        <CounterBtn btnOperator={'+'}/>
                    </Box>
                </Box>
                <Box>
                    <ButtonBase sx = {
                        {
                            backgroundColor: colors.primary,
                            width: '200px',
                            height: '40px',
                            fontSize: '1.01rem',
                            color: 'white',
                            borderRadius: '3px'
                        }
                        }>Add To Cart</ButtonBase>
                </Box>

                <Box>
                    <Box>
                        <Typography textAlign='center' variant='h7'>More Details on Product</Typography>
                        <Typography >
                            {description}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
        <LatestProducts/>
    </>
  )
}

export default LatestItemDetails
