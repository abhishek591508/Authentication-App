const user = require('../models/user')  // import model to communicate with DB
const bcrypt = require('bcrypt');   //import bcrypt for hashing password


const signup = async (req,res)=>{
    try{
        const{name, email, password, role} = req.body;
        const isUser = await user.findOne({email});
        if(isUser){
            return res.status(400).json({
                success: false,
                message:"User Already exist"
            })
        }
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);//mistake-bcrypt is asynchronous and hence should be awaited
        }catch(error){
            return res.status(500).json({
                success: false,
                message: "Error in hashing password"
            })
        }
         
        const createData = await user.create({
            name, email, password:hashedPassword, role
        })
        return res.status(200).json({   //res.status not createData.status 
            success:true,
            data:createData,
            message:"Data created Successfully"
        })
    }
    catch(error){
        console.log("Error in signup", error);
        return res.status(500).json({
            success: false,
            message: "Error in Signup",
            error: error.message
        })

    }
}


module.exports = {signup};