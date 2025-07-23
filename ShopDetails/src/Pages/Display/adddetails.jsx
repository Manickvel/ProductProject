import { useState } from 'react'
import './../../styles/addusers.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

// import tailwindcss from '@tailwindcss/vite'
const AddProducts=()=>{

    const navigate = useNavigate()
    const users ={
        shopname:'',
        productname:'',
        manufacturedate:'',
        expirydate:'',
        price:'',
        productid:''
    }
    const [user,setuser] =useState(users)
    const submitForm = async(e)=>{
        try{
        e.preventDefault()
        const response = await axios.post(`${import.meta.env.VITE_SERVER_APP_URL}/addproduct`,user)
        if(response.status === 200){
            toast.success("success",{position:'top-right'})
            navigate('/users')
        }
        }
        catch(error){
            console.log(error)
        }

    }
// success("success",{position:'top-right'})
    const inputHandler =(e)=>{
        const {name,value} =e.target
        setuser({...user,[name]:value})
    }

return(
    <>
<div className="main">
    <div className="addUser">
        <h3>ADD Product</h3>
        <form className='adduserforms'  onSubmit={submitForm}>
        <div className='inputgroup'>
            <label htmlFor="name">Shop Name</label>
            <input type="text" required="true" placeholder="Enter your Shop Name" autoComplete='off' name="shopname" id="shopname" onChange={inputHandler}/>
        </div>
        <div className='inputgroup'>
            <label htmlFor="college">Product Name</label>
            <input type="text"  required="true" placeholder="Enter your Product Name" autoComplete='off' name="productname" id="productname" onChange={inputHandler}/>
        </div>
        <div className='inputgroup'>
            <label htmlFor="email">Product Id</label>
            <input type='number'  required="true" placeholder="Enter your Product Id" autoComplete='off' name="productid" id="productid" onChange={inputHandler}/>
        </div>
        <div className='inputgroup'>
            <label htmlFor="year">Manufacture Year</label>
            <input  type='number' required="true" placeholder="Enter the Manufacture Year" autoComplete='off' name="manufacturedate" id="manufacturedate" onChange={inputHandler}/>
        </div>
        <div className='inputgroup'>
            <label htmlFor="age">Expiry Year</label>
            <input type='number' required="true" placeholder="Enter the expiry Year" autoComplete='off' name="expirydate" id="expirydate" onChange={inputHandler}/>
        </div>
        <div className='inputgroup'>
            <label htmlFor="batch">Price</label>
            <input type='number' required="true" placeholder="Enter your Price" autoComplete='off' name="price" id="price" onChange={inputHandler}/>
        </div>
        <button type= 'submit'className=" button bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-full">Submit</button>
    </form>
    </div>
</div>
    </>
);
}
export default AddProducts