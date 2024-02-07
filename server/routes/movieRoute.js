const router = require('express').Router();
const Movie = require('../models/movieModel');

//add a movie
router.post('/add-movie', async (req,res)=>{
    try{
        const newMovie = new Movie(req.body);
        // console.log(newMovie);
        await newMovie.save();
        res.send({
            success:true,
            message:'Movie added'
        })
    }
    catch(error){
        res.send({
            success:false,
            message:'error hai'
        })
    }
})

//get all movies
router.get('/get-all-movies', async (req,res)=>{
    try{
        const movies = await Movie.find();
        res.send({
            success:true,
            message:'All Movies fetched',
            data:movies
        })
    }
    catch(error){
        res.send({
            success:false,
            message:'movies nhi aai hai'
        })
    }
})

//update a movie
router.put('/update-movie', async (req,res)=>{
    try{
        await Movie.findByIdAndUpdate(req.body.movieId,req.body)
        res.send({
            success:true,
            message:'Movie updated'
        })
    }
    catch(error){
        res.send({
            success:false,
            message:'error hai'
        })
    }
})

// delete a movie
router.delete('/delete-movie', async (req,res)=>{
    try{
        await Movie.findByIdAndDelete(req.body.movieId)
        res.send({
            success:true,
            message:'Movie deleted'
        })
    }
    catch(error){
        res.send({
            success:false,
            message:'error hai'
        })
    }
})

module.exports = router;