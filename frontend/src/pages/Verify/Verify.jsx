import React, { useState } from 'react'
import "./Verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
import { useEffect } from "react"

const Verify = () => {

    const [searchParams,setSearchParams]= useSearchParams() 
    const success = searchParams.get("success")

    const orderId = searchParams.get("orderId")
    console.log("success : ",success, orderId)
 
    const {url,token}= useContext(StoreContext)

     const navigate= useNavigate()

    const verifyPayment = async()=>{
      // const response = await axios.post(`${url}/api/order/list`,{success,orderId})
      // console.log("response :---> ",response)
      // console.log("response :---> ",response.data)

      if (success) {
          navigate("/myorders")
       }
       else {
          navigate("/")
       }
  }
//   console.log("verifyPayment:---> ", verifyPayment)
       useEffect(() => {
          verifyPayment()
       }, [])
       
    return (
     <div>
      {success? 
                 <div>
                  <h1>Payment Successfull</h1>
                  </div>     
      :   <div className='verify'>
       <div className='spinner'>
         </div>
      </div> }
        
     </div>
     
      
    )
  }
  
  export default Verify

