import React from 'react'
import { Button } from '@mui/material'

const MyButton = ({BtnName,styleType}) => {
  return (
    <div>
      <Button variant = {`${styleType}`} sx = {{borderRadius: '14px'}}>{BtnName}</Button>
    </div>
  )
}

export default MyButton
