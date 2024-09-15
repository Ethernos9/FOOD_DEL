import React from 'react'
import {ToastContainer} from "react-toastify"
import NavBar from './components/NavBar/NavBar'
import AddItems from './pages/AddItems/AddItems'
import Orders from './pages/Orders/Orders'
import ListOrders from "./pages/ListOrders/ListOrders"
import SideBar from "./components/SideBar/SideBar"
import {Routes,Route} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:3000"

  return (
    <div>
         <ToastContainer/>
         <NavBar/>
         <hr />
         <div className="app-content">
          <SideBar/>
          
            <Routes>
               <Route path = "/add" element = {<AddItems url ={url}/>}/>
               <Route path = "/list" element = {<ListOrders url ={url}/>}/>
               <Route path = "/orders" element = {<Orders url ={url}/>}/>
            </Routes>
        
         </div>
    </div>
  )
}

export default App
