import React from 'react'
import { useStyles } from '../styleComponents/useStyles'
import { Button, Card, CardContent, Container } from '@mui/material'
import { Link } from 'react-router-dom'



const Home = () => {
  const {classes} = useStyles()
  return (
    <>
      <Container maxWidth = "lg">
        <CardContent>
          <div className={classes.showcaseStyle}>
            <Link to= '/products' style = {{
              textDecoration: "none"
            }}>
              <Button sx={{width: "200px",fontSize: "1.1rem",}} className={classes.searchBtnStyle}>
                Shop Now
              </Button>
            </Link>
          </div>
        </CardContent>
      </Container>
    </>
  )
}

export default Home
