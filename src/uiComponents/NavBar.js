import React from 'react'
import {AppBar,Toolbar, InputBase, Grid, Badge, Button } from '@mui/material'
import ButtonComp from '../utilityComponents/Button'
import { useStyles } from '../styleComponents/useStyles'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavBar = () => {
  const {classes} = useStyles()
 
  return (
    <>
      <AppBar variant = 'static' className={classes.navBar}>
        
        <Toolbar sx = {{maxWidth: "1300px", position: "relative", minWidth: '100%'}}  >
          <Grid container alignItems='center' className={classes.toolBarStyles}>
            <Grid item>
              <ButtonComp className = {classes.logoStyle}/>
            </Grid>

            <Grid item className={classes.centerItems}>
              <InputBase className={classes.inputStyles} 
                placeholder='search'
                startAdornment = {<SearchIcon fontSize='sm'
                size = 'medium'
                />}
              />
              <Button variant='contained' className={classes.searchBtnStyle}>
                search
              </Button>
            </Grid>

            <Grid item >
              <Button>
                <Badge badgeContent = {1} color = "primary">
                  <ShoppingCartIcon className={classes.cartIconStyle} />
                </Badge>
              </Button>
            </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar><br/><br/>
    </>
  )
}

export default NavBar
