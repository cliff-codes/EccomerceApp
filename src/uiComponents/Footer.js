import React from 'react'
import Logo from './Logo'
import { OutlinedInput } from '@mui/material'
import MyButton from '../utilityComponents/Button'

//styles
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='sectionOne'>
        <Logo logoColor={'#1b76ff'}/>
      </div>
        <div className='contact'>
          <div className='title'>Contact Us</div>
          <div className='phone'>+233558776503</div>
          <div className='email'>visiostudios@gmail.com</div>
        </div>
        <div className='subScription'>
            <div>
                <OutlinedInput placeholder='Enter your email' sx = {
                  {
                    height: "40px",
                    borderRadius: "14px",
                    backgroundColor: '#f1f1f1'
                  }
                }/>
            </div>
            <MyButton styleType={'contained'} BtnName = {'Subscribe'}/>
        </div>
    </footer>
  )
}

export default Footer
