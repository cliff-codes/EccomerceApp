import React from 'react'
import {Button} from '@mui/material'
import { useStyles } from '../styleComponents/useStyles'

const ButtonComp = () => {
    const {classes} = useStyles()
  return (
    <>
        <Button  className = {classes.logoStyle}>
            Shop Quickie
        </Button>
    </>
  )
}

export default ButtonComp
