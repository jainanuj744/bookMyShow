const router = require("express").Router();
const authmiddleware = require("../middlewares/authMiddleware");
const Movie = require("../models/movieModel");

//add a movie
router.post("/add-movie", authmiddleware, async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    // console.log(newMovie);
    await newMovie.save();
    res.send({
      success: true,
      message: "Movie added",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "error hai",
    });
  }
});

//get all movies
router.get("/get-all-movies", authmiddleware, async (req, res) => {
  try {
    const movies = await Movie.find();
    res.send({
      success: true,
      message: "All Movies fetched",
      data: movies,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "movies nhi aai hai",
    });
  }
});

//get a movie by id
router.get("/get-movie-by-id/:id", authmiddleware, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.send({
      success: true,
      message: "Movie Fetched",
      data: movie,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
});

//update a movie
router.put("/update-movie", authmiddleware, async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.body.movieId, req.body);
    res.send({
      success: true,
      message: "Movie updated",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "error hai",
    });
  }
});

// delete a movie
router.put("/delete-movie", authmiddleware, async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.body.movieId);
    res.send({
      success: true,
      message: "Movie deleted",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "error hai",
    });
  }
});

module.exports = router;
