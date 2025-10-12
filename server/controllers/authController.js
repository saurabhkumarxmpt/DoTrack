const User=require('../models/User');
const bcrypt=require('bcrypt');

exports.signup=async(req,res)=>{
    const{name,email,password}=req.body;
    try{
        const hasedpassword=await bcrypt.hash(password,10);
        const newUser=await User({name,email,password:hasedpassword});
        await newUser.save();
        res.json({message:"user saved"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}