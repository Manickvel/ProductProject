import shop from '../model/DetailModule.js'
//creation of product
export const CreateProduct = async(req,res)=>{
    try {
        const User = new shop(req.body)
        const  {productid} = User
        const userExist = await shop.findOne({productid})
        if (userExist){
            return res.status(400)
        }
        const savedata = await User.save()
        res.status(200).json({message:"data saved succesfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"user creation error"})
    }
}

export const getAllProductDetails = async(req,res)=>{
    try{
        const userdata = await shop.find();
        if(!userdata||userdata.length ===0){
            return res.status(400).json({alert:"no User found"})
        }
        res.status(200).json(userdata)
    }catch(error){
        res.status(500).json({alert:"Getting user error"})
    }
}

export const updateProduct = async(req,res)=>{
    try {
        const id = req.params.id
        const userdata = await shop.findById(id)
        if (!userdata){
            return res.status(404).json({message:"user not forund "})
        }
        await shop.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"user has been updated"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"updation error"})
    }

}

export const getProductbyid =async(req,res)=>{
    try {
        const id = req.params.id
        const userdata = await shop.findById(id)
        if (!userdata){
            return res.status(404).json({message:"user not forund "})
        }
        res.json(userdata)
    } catch (error) {
        res.status(500).json({message:"getting user error"})
    }
}

export const deleteProduct =async(req,res)=>{
    try {
        const id = req.params.id
        const userdata = await shop.findById(id)
        if (!userdata){
            return res.status(404).json({message:"user not forund "})
        }
        await shop.findByIdAndDelete(id)
        res.status(200).json({message:"user has been deleted"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"deletion error"})
    }
}