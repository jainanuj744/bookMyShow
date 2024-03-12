const router = require('express').Router();
const authmiddleware = require('../middlewares/authmiddleware');
const Theatre = require('../models/theatreModel');

//add a theatre
router.post('/add-theatre', authmiddleware, async (req,res)=>{
    try{
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        res.send({
            success:true,
            message:'Theatre added'
        })
    }
    catch(error){
        res.send({
            success:false,
            message:'Unable to add Theatre'
        })
    }
})

//get theatre owner specific
router.post('/get-all-theatre-by-owner', authmiddleware,async (req,res)=>{
    try{
        const theatres = await Theatre.find({owner:req.body.owner})
        res.send({
            success:true,
            message:"Theatre added",
            data:theatres
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})

//update a theatre

router.put('/update-theatre', authmiddleware, async (req,res)=>{
    try{
        await Theatre.findByIdAndUpdate(req.body.theatreId,req.body)
        res.send({
            success:true,
            message:'Theatre updated'
        })
    }
    catch(error){
        res.send({
            success:false,
            message:error.message
        })
    }
})

// delete a theatre

router.put('/delete-theatre', authmiddleware, async (req,res)=>{
    try{
        await Theatre.findByIdAndDelete(req.body.theatreId)
        res.send({
            success:true,
            message:'Theatre deleted'
        })
    }
    catch(error){
        res.send({
            success:false,
            message:error.message
        })
    }
})

//get all theatre route

router.get('/get-all-theatres', authmiddleware, async(req,res)=>{
    try{
        const theatres = await Theatre.find().populate('owner');
        res.send({
            success:true,
            message:"Theatres fetched",
            data:theatres
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})

module.exports = router;