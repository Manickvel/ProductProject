import axios from 'axios'
import './../../styles/user.css'
import { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
// import { useAuth } from '../Auth/authprovider'
const DisplayUser=()=>{
    const navigate = useNavigate()
    const [users,setusers]= useState([]);
    // const {logoutAction ,user} = useAuth();
    // const handleLogout = () => {
    //     logoutAction(); 
    //     toast.success("Logout successfully",{position:'top-right'})
    // }
    // const customername = prompt("enter Your name");
    // var count1 =0;
    // const backdelete = async(id)=>{
    //     count1 =1;
    //     deleteitem(id)
    // }
    // const deleteproduct = async(id)=>{

    // }
    //  const configuretoast = () =>{
    //     return(
    //         <div>
    //             <p>Are you sure to delete this?</p>
    //             <button className='hover:cursor-pointer btn' id='hometoast1' onClick={backdelete}>yes</button>
    //             <button className='hover:cursor-pointer btn'id='hometoast2' >NO</button>
    //         </div>
    //     )
    // }
    // const navigate = useNavigate()
    // const deleteitem =async(id)=>{
    //     toast(configuretoast())
    //     if(count1===1){
    //     await axios.delete(`http://localhost:4000/sms/delete/product/${id}`)
    //     .then((response)=>{
    //         toast.success("deleted successfully",{position:'top-right'})
    //         window.location.reload();
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    //     }
    // }

    const deleteitem = async (id) => {
    const toastId = toast(() => (
            <div className='flex flex-col'>
                <p className="mb-2 font-medium">Are you sure you want to delete this item?</p>
                <div className="flex gap-3">
                    <button
                        className='btn text-white px-3 py-1 rounded '
                        id='hometoast1'
                        onClick={async () => {
                            try {
                                const response = await axios.delete(`http://localhost:4000/sms/delete/product/${id}`);
                                if(response.status === 200){
                                toast.success("Deleted successfully", { position: "top-right",delay:100000 });
                                navigate(0)
                                }
                            } catch (error) {
                                toast.error("Failed to delete item", { position: "top-right" });
                                console.error(error);
                            }
                        }}
                    >
                        Yes
                    </button>
                    <button
                        className='btn text-black px-3 py-1 rounded'
                        id='hometoast2'
                        onClick={() => {
                            navigate(0)
                        }}
                    >
                        No
                    </button>
                </div>
            </div>
        ),
        {
            position: "top-center",
            autoClose: false,
            closeOnClick: false,
            closeButton: false,
            draggable: false,
        }
    );
};
    


    useEffect(()=>{
        const getUsers =async()=>{
             await axios.get('http://localhost:4000/sms/products')
            .then((response)=>{
                setusers(response.data)
            })
        }
        getUsers()
    },[])
    return(
    
    <div className="userTable">
        <p className="text-5xl py-4 font-bold text-blue-800 text-center mb-3">welcome</p>
        {/* <button type='button' onClick={()=>handleLogout()} className='btn btn-danger'>LOGOUT</button> */}
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Shop Name</th>
                    <th>Product Name</th>
                    <th>product Id</th>
                    <th>Manufacture Date</th>
                    <th>Expiry Date</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map((users,index)=>{
                    console.log(users)
                    return( 
                    <tr>
                        <td>{index+1}</td>
                        <td>{users.shopname}</td>
                        <td>{users.productname}</td>
                        <td>{users.productid}</td>
                        <td>{users.manufacturedate}</td>
                        <td>{users.expirydate}</td>
                        <td>{users.price}</td>
                        <td><button type='button' onClick={()=>deleteitem(users._id)}  className='btn btn-danger delete'>Delete</button>
                        <Link to = {`/updateuser/${users._id}`} type='button'  className='btn btn-primary'>
                         update
                        </Link></td>
                    </tr>)
                })}
               
            </tbody>

        </table>

        <button type='button' onClick={()=>navigate('/adduser')}  className='btn btn-danger create'>Create User</button>

        {/* <Link to = {`/adduser`} type='button' className='create btn btn-primary'>
            Create User
        </Link> */}
    </div>)
}
export default DisplayUser
