import React, { useContext, useState } from 'react'
import "./LoginPopUp.css"
import axios from "axios"
import {StoreContext} from "../../context/StoreContext.jsx"
import { assets } from '../../assets/assets.js'

const LoginPopUp = ({setShowLogin}) => {

    const {url,setToken,token} = useContext(StoreContext)
      const [currState,setCurrState] = useState("Login")
      const [data,setData]= useState({
        name:"",
        email:"",
        password:"",
      })
  
      const onChangehandler=(e)=>{
        const name = e.target.name
        const value = e.target.value
        setData((data)=>({...data,[name]:value}))
      }
      
     const onLogin=async(e)=>{
         e.preventDefault()
         let newUrl = url
         if (currState ==="Login"){
          newUrl +="/api/user/login"
          // axios.post(`${url}/api/user/login`)
         }
         else{
          newUrl += "/api/user/sign-in"
         }
         const response = await axios.post(newUrl,data)
         console.log(response.data.success)
         if (response.data.success){

       
               setToken(response.data.token)
            

               
               localStorage.setItem("token",response.data.token)
               console.log("coming from localstorage",localStorage.getItem("token"))
               setShowLogin(false)
  
         }
  
         else{
          alert("Login failed")
         }
         
     }
      
    return (
      <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
          <div className="login-popup-title">
              <h2>{currState}</h2> 
              <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
              {currState === "Sign Up" ? <input name='name' onChange={onChangehandler} value={data.name} type="text" placeholder='Your name' required /> : <></>}
              <input name='email' onChange={onChangehandler} value={data.email} type="email" placeholder='Your email' />
              <input name='password' onChange={onChangehandler} value={data.password} type="password" placeholder='Password' required />
          </div>
          <button type="submit">{currState === "Login" ? "Login" : "Create account"}</button>
          <div className="login-popup-condition">
              <input type="checkbox" name="" id="" required/>
              <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          {currState === "Login"
              ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
              : <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
          }
      </form>
  </div>
    )
  }

export default LoginPopUp