import React from 'react'
import "./Header.css"
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <img src={assets.header_img} alt="" />
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishescrafted with the finest ingredients and culinary expertise. Our aim is to satisfy your cravings and elevate your dining experience.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
