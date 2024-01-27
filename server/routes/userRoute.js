// const express = require('express');
// const router = express.Router();

const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

router.post('/register',async (req,res)=>{

    try{
        const userExists = await User.findOne({email:req.body.email});
        if(userExists){
            return res.send({
                success:"false",
                messege:"User Already Exists"
            });    
        }

        //hashed the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        req.body.password = hashedPassword;

        const newUser = await User(req.body)
        console.log(newUser);
        await newUser.save();
        res.send({
            success:"true",
            messege:"User Registered, Please Login"
        });
    }catch(err){
        console.log(err);
    }
})

router.post('/login', async (req,res)=>{
    const user = await User.findOne({email:req.body.email})
    if(!user){
        return res.send({
            success:false,
            messege:"User does not exist"
        })
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if(!validPassword){
        return res.send({
            success:false,
            messege:"Invalid Password"
        })
    }

    return res.send({
        success:true,
        messege:"User Logged In"
    })



})
    
module.exports = router;