import { useState } from 'react'
import {Routes,Route,createBrowserRouter, RouterProvider} from 'react-router-dom'
import DisplayUser from './Pages/Display/displaydetails.jsx'
import UpdateUser from './Pages/Display/editdetails.jsx'
import Home from './Pages/home.jsx'
import AddProducts from './Pages/Display/adddetails.jsx'

function App() {
  const route =createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/adduser",
      element:<AddProducts/>
    },
    {
      path:"/users",
      element:<DisplayUser/>
    },
    {
      path:"/updateuser/:id",
      element:<UpdateUser/>
    }
  ]
  )

  return (
    <RouterProvider router={route}></RouterProvider>
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/shoplogin" element={<ShopLoginPage />} />
    //   <Route path="/shopregister" element={<ShopRegisterPage/>} />
    //   <Route path="/userlogin" element={<LoginPage/>} />
    //   <Route path="/userregister" element={<RegisterPage/>} />
    //   <Route path="/products" element={<DisplayUser/>} />
    //   <Route path="/updateuser/:id" element={<UpdateUser/>} />
    //   <Route path="/addproducts" element={<AddProducts/>} />
      
    // </Routes>

  )
}

export default App
