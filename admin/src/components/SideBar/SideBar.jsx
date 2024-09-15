import React from 'react'
import "./SideBar.css"
import { assets } from '../../assets/assets'
import {NavLink} from "react-router-dom"

const SideBar = () => {
    return (
      <div className='sidebar'>
          <div className="sidebar-options">
              <NavLink to ="/add" className= "sidebar-option">
                  <img src={assets.add_icon} alt="" />
                  <p>Add Items</p>
              </NavLink>
                              
          
          <div className="sidebar-option">
              <NavLink to ="/list" className= "sidebar-option">
                  <img src={assets.order_icon} alt="" />
                   <p>List Items</p>  
              </NavLink>
                 
          </div>
          
          <div className="sidebar-option">
               <NavLink to ="/orders" className= "sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>Orders</p>   
              </NavLink>
               
          </div>
       </div>
  
      </div>
    )
 }

  export default SideBar