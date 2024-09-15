import { createContext,useState,useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);
const StoreContextProvider = (props)=>{
    
   const [cartItems,setCartItems]= useState({})
   const [food_list,setFoodList]= useState([])
   const [token,setToken]= useState("")
   const currency = "₹";
   let deliveryCharge = 30;
   const url = "http://localhost:3000"
   

   const addToCart =async (itemId)=>{
     //code to add item to cart
     
     if (!cartItems[itemId]){
          setCartItems((prev)=>({...prev,[itemId]:1}))
     }
     else {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
     }
     if (token){

      const response = await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
   } 

   const removeFromCart = async(itemId)=>{
       setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
       if (token){
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})

    }
   }

   let getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        try {
          if (cartItems[item] > 0) {
            let itemInfo = food_list.find((product) => product._id === item);
            totalAmount += itemInfo.price * cartItems[item];
        }  
     
      
          
        } catch (error) {
            console.log(error)
        }
        
        
    }
    return totalAmount;
   }

   const fetchFoodList = async()=>{
    const response = await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)
    
   }
   
   const localCartData = async(token)=>{
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartItems(response.data.cartData)
} 
   useEffect(() => {
    async function loadData(){
       await fetchFoodList()
    
    if(localStorage.getItem("token")){
       setToken(localStorage.getItem("token"));
       await localCartData(localStorage.getItem("token"))
  }
}
  loadData();
  }, [])
  
  const contextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    getTotalCartAmount,
    setCartItems,
    setToken,
    url,
    deliveryCharge,
    token,
  }
  return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
    )
}

export default StoreContextProvider;
