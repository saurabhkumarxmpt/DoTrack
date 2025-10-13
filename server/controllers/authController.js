const User=require('../models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
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


exports.login=async(req,res)=>{
    const{email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user) return res.status(400).json({message:"invalid text"});

        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:"password is not match"});

        const token=jwt.sign({id:user._id},process.env.JWT_SECERT,{expiresIn:'1h'});
        res.json({user,token})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}