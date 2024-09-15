import React, { useState } from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from "../../components/Footer/Footer.jsx"
import FoodItem from "../../components/FoodItem/FoodItem.jsx"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.jsx"
import AppDownload from '../../components/AppDownload/AppDownload.jsx'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'


const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
     
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category= {category}/>
       <AppDownload/>
     
    </div>
  )
}

export default Home