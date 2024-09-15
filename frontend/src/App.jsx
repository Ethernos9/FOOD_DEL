import React,{useState} from 'react'
import {Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx"
import MyOrder from "./pages/MyOrder/MyOrder.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import LoginPopUp from './components/LoginPopUp/LoginPopUp.jsx'
import Verify from './pages/Verify/Verify.jsx'
function App() {
  
  const [showLogin,setShowLogin]= useState(false)

  return (
   <>
    {
    showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <> </> 
   }
     <div className="app">
     <NavBar setShowLogin={setShowLogin}/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route exact path='/place-order' element={<PlaceOrder />} />
            <Route exact path='/verify' element={<Verify/>} />

            <Route exact path="/myorders" element={<MyOrder />} />
         
        </Routes>
      
     </div>
      <Footer/>
    
   </>
  )
}

export default App
