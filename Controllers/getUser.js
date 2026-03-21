const user = require('../models/user');
const bcrypt = require("bcrypt");

const getAllUsers = async (req,res)=>{
    try{
        const users = await user.find();
        return res.status(200).json({
            success:true,
            data:users,
            message:"Users fetched successfully"
        })
    }
    catch(error){
        console.log("Error in fetching users", error);
        return res.status(200).json({
            success:false,
            message:"error in fetching users data",
            error:error.message
        })
    }
}

module.exports = {getAllUsers};