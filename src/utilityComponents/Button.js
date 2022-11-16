import React from 'react'
import {Button} from '@mui/material'
import { useStyles } from '../styleComponents/useStyles'
import { Link } from 'react-router-dom'
import { colors } from '../styleComponents/colors'
const ButtonComp = () => {
    const {classes} = useStyles()
  return (
    <>
        <Button  className = {classes.logoStyle}>
            <Link to = '/' style={{textDecoration: 'none', color: colors.primary}}>
            Shop Quickie
            </Link>
        </Button>
    </>
  )
}

export default ButtonComp
