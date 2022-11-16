import React from 'react'
import {AppBar,Toolbar, InputBase, Grid,Container,Box, Badge, Button,useMediaQuery } from '@mui/material'
import ButtonComp from '../utilityComponents/Button'
import { useStyles } from '../styleComponents/useStyles'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const NavBar = () => {
  const {classes} = useStyles()
  const matches = useMediaQuery('(max-width: 480px)')
  
  return (
    <>
      <AppBar variant = 'static' className={classes.navBar}>
        
        <Toolbar sx = {{maxWidth: "1300px", position: "relative", minWidth: '100%'}}  >

          <Box container alignItems='center' className={classes.toolBarStyles}>
            <Box item className= { matches ? classes.logoArea : null}>
              <ButtonComp className = {classes.logoStyle}/>
            </Box>

            <Box item className={classes.centerItems}>
              <InputBase className={classes.inputStyles} 
                placeholder='search'
                startAdornment = {<SearchIcon fontSize='sm'
                size = 'medium'
                />}
              />
              <Button variant='contained' className={classes.searchBtnStyle}>
                search
              </Button>
            </Box>

            <Box item >
              <Button>
                <Badge badgeContent = {1} color = "primary">
                  <ShoppingCartIcon className={classes.cartIconStyle} />
                </Badge>
              </Button>
            </Box>
          </Box>
          
        </Toolbar>
      </AppBar><br/><br/>
    </>
  )
}

export default NavBar
