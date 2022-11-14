import React from 'react'
import { Grid, Typography, Input, Button } from '@mui/material'
import ButtonComp from '../utilityComponents/Button'
import { useStyles } from '../styleComponents/useStyles'
const Footer = () => {
  const {classes} = useStyles()
  return (
    <Grid container className={classes.footerStyles} >
      <Grid item xs = {12} sm = {6} md = {3}>
        <ButtonComp/>
      </Grid>

      <Grid item xs = {12} sm = {6} md = {3}>
        <Typography variant = 'h7' color = 'white'>
          Are you new to shop Quickie?.<br/>
          subscribe to our newsletter <br/>
          so that you will be notified whenever<br/>
          there are new deals.
        </Typography>
        <div>
          <Input className= {classes.footerInput} placeholder='enter your email'/>
          <Button className={classes.searchBtnStyle}>subscribe</Button>
        </div>
      </Grid>

      <Grid item xs = {12} sm = {6} md = {3}>
        <Typography variant='h6' color='white'>Contact us</Typography>
        <Typography variant='h7' color='white'>
          cliffordadomah2580@gmail.com
        </Typography><br/>
        <Typography variant='h7' color='white'>
          +233 558776503
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
