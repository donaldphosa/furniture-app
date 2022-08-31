import React from 'react'
import './navbar.css'
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logo'>
          <h4>DD Furniture</h4>
        </div>
        <div className='nav_links'>
          <p>Home</p>
          <p>Products</p>
          <p>Categories</p>
          <p>About</p>
          <p>Contacts</p>
        </div>
        <div className='nav_right_links'>
          <AiOutlineSearch fill='#07484A'/>
          <AiOutlineShoppingCart fill='#07484A'/>
          <AiOutlineUser fill='#07484A'/>
        </div>
    </nav>
  )
}

export default Navbar