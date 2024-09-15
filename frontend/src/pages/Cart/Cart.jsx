import React, { useEffect, useState } from 'react'
import "./Cart.css"
import { useContext } from 'react'
import {StoreContext} from "../../context/StoreContext.jsx"
import {useNavigate} from "react-router-dom"
// import { food_list } from '../../assets/assets.js'

const Cart = () => {
     

    const {cartItems,removeFromCart,getTotalCartAmount,deliveryCharge,food_list,url} = useContext(StoreContext)

      let deliveryFee = getTotalCartAmount() >=500 ? 0: deliveryCharge
    const navigate= useNavigate();

   
    
  return (
    <div className='cart'>
        <div className='cart-items'>
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {
            food_list.map((item,index)=>{
              if (cartItems[item._id]>0){
                return (
                  <div key = {index}>
                      <div  className="cart-items-title cart-items-item" >
                        <img src={url+"/images/"+item.image} alt="" />
                        <p>{item.name}</p>
                        <p>₹{item.price}</p>
                        <p>{cartItems[item._id]}</p>
                        <p>{item.price * cartItems[item._id]}</p>
                        <p onClick={()=>{removeFromCart(item._id)}} className='cross'>X</p>
                      </div>
                      <hr />

                  </div>
                )
              }
            })
          }
        </div>

        <div className="cart-bottom">
        <div className="cart-total">
           <h2>Cart Total</h2>
           <div>
               <div className='cart-total-details'>
                     <p>Subtotal</p>
                     <p>₹{getTotalCartAmount()}</p>
                    
               </div>
               <hr />
               <div className='cart-total-details'>
                     <p>Delivery Charges</p>
                     <p>₹{getTotalCartAmount()===0 ? 0:deliveryFee}</p>
               </div>
               <hr />
               <div className='cart-total-details'>
                     <b>Total</b>
                     <b>₹{getTotalCartAmount()===0 ? getTotalCartAmount():getTotalCartAmount()+deliveryFee}</b>
               </div>
               <hr />
           </div>
             <button onClick={()=>navigate("/place-order")}>Proceed To CheckOut</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code , Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code' />
              

              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart