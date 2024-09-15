import React from 'react'
import "./NavBar.css"
import {assets} from "../../assets/assets.js"

const NavBar = () => {
    return (
      <div className='navbar'>
           {/* <img src={assets.logo} alt="logo" /> */}
           <h1>FOODEL</h1>
           <img src={assets.profile_image} alt="profile" />
  
      </div>
    )
  }
export default NavBar