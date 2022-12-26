import React from 'react'
import { InputBase, Button } from '@mui/material'
import './searchBar.css'
const SearchBar = () => {
  return (
    <div className='searchBar'>
      <InputBase sx = {
        {
            background: '#f1f1f1',
            padding: ' 0 0 0 3px',
            margin: '0 0 0 0',
            height: '100%',
            width: '100%'
        }
      } />
      <Button variant = "contained">Search</Button>
    </div>
  )
}

export default SearchBar
