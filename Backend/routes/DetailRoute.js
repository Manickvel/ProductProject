import express from 'express'
import {CreateProduct,getAllProductDetails,updateProduct,getProductbyid,deleteProduct} from '../contoller/usercontrol.js'


const route = express.Router()

route.post('/addproduct',CreateProduct)
route.get('/products',getAllProductDetails)
route.get('/products/:id',getProductbyid)
route.delete('/delete/product/:id',deleteProduct)
route.put('/product/update/user/:id',updateProduct)

// route.post('/shopregister',shopRegister)
// route.post('/shoplogin',shoplogin)
// route.post('/shoplogout',shoplogout)

// route.post('/customerlogout',customerlogout)
// route.post('/customerlogin',customerlogin)
// route.post('/customerregister',CustomeRregister)

export default route


// {
//   "shopname": "manicadakvel",
//   "productname": 20,
//   "manufacturedate": "2025-07-21",
//   "expirydate": "2026-07-21",
//   "price": 2025,
//   "productid": 12
// }