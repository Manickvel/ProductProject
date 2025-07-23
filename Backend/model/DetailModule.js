import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    shopname:{
        type :String,
        require:true
    },
    productname:{
        type :String
    },
    manufacturedate:{
        type :Number
        
    },
    expirydate:{
        type :Number
    },
    price:{
        type :Number
    },
    productid:{
        type:Number
    }
})
export default mongoose.model('shop',userSchema)