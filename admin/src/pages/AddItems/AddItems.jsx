import React from 'react'
import "./AddItems.css"
import axios from "axios"
import {assets} from "../../assets/assets"
import { useState } from 'react'
import {toast} from "react-toastify" 

const AddItems = ({url}) => {
    

    
  const [image,setImage]= useState(false)
  const [data,setData] = useState({
        name:"",
        description:"",
        category:"Salad",
        price:"",
  })
  const onChangehandler= (e)=>{
      const name  = e.target.name
      const value = e.target.value
     
     setData(data=>({...data,[name]:value}))

  }
  const onSubmitHandler=async (e)=>{
      e.preventDefault()
      const formData= new FormData();
      formData.append("name",data.name)
      formData.append("description",data.description)
      formData.append("category",data.category)
      formData.append("filename",image)
      formData.append("price",Number(data.price))

      const response = await axios.post(`${url}/api/food/add`,formData)
      if (response.data.success){
                setData({
                  name:"",
                  description:"",
                  category:"",
                  price:"",
                })
                setImage(false)
                toast.success(response.data.message)

              } 
      else{
          toast.error(response.data.message)
      }


  }
 
  

return (
  <div className='add'>
  <form  onSubmit= {onSubmitHandler} className='flex-col'>
      <div className='add-img-upload flex-col'>
          <p>Upload image</p>
          <label htmlFor="image">
              <img src={image? URL.createObjectURL(image) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" accept="image/*" id="image" hidden />

      </div>
      <div className='add-product-name flex-col'>
          <p>Product name</p>
          <input name ="name" onChange={onChangehandler} value={data.name} type="text" placeholder='Type here' required />
      </div>
      <div className='add-product-description flex-col'>
          <p>Product description</p>
          <textarea onChange={onChangehandler} value = {data.description} name='description'  type="text" rows={6} placeholder='Write content here' required />
      </div>
      <div className='add-category-price'>
          <div className='add-category flex-col'>
              <p>Product category</p>
              <select onChange= {onChangehandler} name='category' value = {data.category} >

                  <option value="Salad">Salad</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Deserts">Deserts</option>
                  <option value="Sandwich">Sandwich</option>
                  <option value="Cake">Cake</option>
                  <option value="Pure Veg">Pure Veg</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Noodles">Noodles</option>

              </select>
          </div>
          <div className='add-price flex-col'>
              <p>Product Price</p>
              <input onChange={onChangehandler} value = {data.price} type="Number" name='price' placeholder='25' />
          </div>
      </div>
      <button type='submit' className='add-btn' >ADD</button>
  </form>
</div>
)
}
export default AddItems