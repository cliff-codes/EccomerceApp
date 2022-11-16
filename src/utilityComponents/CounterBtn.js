import React from 'react'
import {ButtonBase} from '@mui/material'
import { colors } from '../styleComponents/colors'

const CounterBtn = ({btnOperator}) => {
  return (
    <ButtonBase  sx={
        {
            color: 'white', 
            backgroundColor: `${colors.primary}`,
            fontSize: 'large',
            width: '45px',
            height: '45px',
            borderRadius: "3px"
            }}>
        {btnOperator}
    </ButtonBase>
  )
}

export default CounterBtn
