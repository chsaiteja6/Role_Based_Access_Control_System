const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const User=require("../models/userModel");
const register=async (req,res)=>{
    try{
   const {username,password,role}=req.body;
   
   const hashedPassword=await bcrypt.hash(password,10);
   
   const newuser=new User({username,password:hashedPassword,role});
   await newuser.save();
   res.status(200).json({message:`user ${username} registered successfully`});
    }catch(err){
      res.status(500).json({message:err.message});
    }
}

const login=async (req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await User.findOne({username});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Incorrect Password"});
        }
        const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1h"});

        res.status(200).json({token});
    }catch(err){
        res.status(500).json({message:err.message});
    }
    
}

module.exports={
    register,login
}