import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Favorites from './Favorites'
import CartIcon from './CartIcon'

//custom Styles
import './cartAndFavIcon.css'
import './nav.css'

const Nav = () => {
  return (
      <nav>
        <div className='logoAndMenu'>
          <div className='menuIcon'><MenuIcon/></div>
          <Logo logoColor={'#1b76ff'}/>
        </div>
        <div className='search'>
          <SearchBar/>
        </div>
        <div className='CartAndFavorite'>
          <Favorites/>
          <CartIcon/>
        </div>
      </nav>
  )
}

export default Nav
