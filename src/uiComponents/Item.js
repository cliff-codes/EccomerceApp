import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { colors } from '../styleComponents/colors';
import { useStyles } from '../styleComponents/useStyles';



const Item = ({item}) => {
    const {image,price,title,rating} = item

    const formattedName = (title) => {
        const name = title.length > 20 ? title.slice(0,19) : title
        return name
    }

    const {classes} = useStyles()
  
  return (
    <Card className={classes.cardStyle}>
      <CardMedia image = {`${image}`} sx = {
        {paddingTop: '56.25%',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
        }
      }/>
      <CardContent className={classes.cardContentStyles}>
        <Typography variant='h7' sx = {{fontWeight: '400'}}>
            {formattedName(title)}
        </Typography>
        <Typography variant='h7' sx = {{fontWeight: '400'}}>
            {`$${price}`}
        </Typography>
        <Typography variant='h7' className={classes.centerItems} sx = {{alignItems: 'center'}}>
            <StarRoundedIcon fontSize='small' sx={
                {color : `${colors.primary}`}
            }/>
            <Typography variant='h7'>
                {rating.rate}
            </Typography>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Item
