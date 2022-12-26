import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const formatName = (name) => {
    let formatedName = name.length > 18 ? `${name.slice(0,17)}...` : name 
    return formatedName
}

const Item = ({item}) => {
    const {id} = item
  return (
    <Link to = {`/${id}`} className='link'>
        <Card className='card'>
            <CardMedia className='cardImg' sx = {{
                paddingTop: '56.25%',
                backgroundSize: 'contain',
            }}  image = {`${item.image}`}/>
            <CardContent>
                <Typography className='price'>
                    {formatName(item.title)}
                </Typography>

                <Typography className='rating'>
                    Ratings: {item.rating.rate} ({item.rating.count})
                </Typography>

                <Typography className='price'>
                    ${item.price}
                </Typography>
            </CardContent>
        </Card>
    </Link>
  )
}

export default Item
