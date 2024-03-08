const router = require('express').Router();
const authmiddleware = require('../middlewares/authmiddleware');
const Theatre = require('../models/theatreModel');

//add a theatre
router.post('/add-theatre',authmiddleware, async (req,res)=>{
    try{
        const newTheatre = new Theatre(req.body);
        // console.log(newMovie);
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

// //get all theatres
// router.get('/get-all-theatre',authmiddleware, async (req,res)=>{
//     try{
//         const movies = await Movie.find();
//         res.send({
//             success:true,
//             message:'All Movies fetched',
//             data:movies
//         })
//     }
//     catch(error){
//         res.send({
//             success:false,
//             message:'movies nhi aai hai'
//         })
//     }
// })

// //update a theatre
// router.put('/update-theatre',authmiddleware, async (req,res)=>{
//     try{
//         await Movie.findByIdAndUpdate(req.body.movieId,req.body)
//         res.send({
//             success:true,
//             message:'Movie updated'
//         })
//     }
//     catch(error){
//         res.send({
//             success:false,
//             message:'error hai'
//         })
//     }
// })

// // delete a theatre
// router.put('/delete-theatre',authmiddleware, async (req,res)=>{
//     try{
//         await Movie.findByIdAndDelete(req.body.movieId)
//         res.send({
//             success:true,
//             message:'Movie deleted'
//         })
//     }
//     catch(error){
//         res.send({
//             success:false,
//             message:'error hai'
//         })
//     }
// })

module.exports = router;