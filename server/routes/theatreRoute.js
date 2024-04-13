const router = require("express").Router();
const authmiddleware = require("../middlewares/authmiddleware");
const Show = require("../models/showModel");
const Theatre = require("../models/theatreModel");

//add a theatre
router.post("/add-theatre", authmiddleware, async (req, res) => {
  try {
    const newTheatre = new Theatre(req.body);
    await newTheatre.save();
    res.send({
      success: true,
      message: "Theatre added",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Unable to add Theatre",
    });
  }
});

//get theatre owner specific
router.post("/get-all-theatre-by-owner", authmiddleware, async (req, res) => {
  try {
    const theatres = await Theatre.find({ owner: req.body.owner });
    res.send({
      success: true,
      message: "Theatre added",
      data: theatres,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//update a theatre

router.put("/update-theatre", authmiddleware, async (req, res) => {
  try {
    await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
    res.send({
      success: true,
      message: "Theatre updated",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// delete a theatre

router.put("/delete-theatre", authmiddleware, async (req, res) => {
  try {
    await Theatre.findByIdAndDelete(req.body.theatreId);
    res.send({
      success: true,
      message: "Theatre deleted",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//get all theatre route

router.get("/get-all-theatres", authmiddleware, async (req, res) => {
  try {
    const theatres = await Theatre.find().populate("owner");
    res.send({
      success: true,
      message: "Theatres fetched",
      data: theatres,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// add a show

router.post("/add-show", authmiddleware, async (req, res) => {
  try {
    const newShow = new Show(req.body);
    await newShow.save();
    res.send({
      success: false,
      message: "Show Added",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get shows based on theatre

router.post("/get-all-shows-by-theatre", authmiddleware, async (req, res) => {
  try {
    const shows = await Show.find({ theatre: req.body.theatreId }).populate(
      "movie"
    );
    res.send({
      success: true,
      message: "Shows Fetched",
      data: shows,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// delete a show
router.post("/delete-show", authmiddleware, async (req, res) => {
  try {
    await Show.findByIdAndDelete(req.body.showId);
    res.send({
      success: true,
      message: "Show Deleted Successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get all unique theatres which have shows of a movie

router.post("/get-all-theatres-by-movie", authmiddleware, async (req, res) => {
  try {
    const { movie, date } = req.body;
    // find all the shows of a movie on given date
    const shows = await Show.find({ movie, date }).populate("theatre");
    let uniqueTheatre = [];
    shows.forEach((show) => {
      const theatre = uniqueTheatre.find(
        (theatre) => theatre._id == show.theatre._id
      );
      if (!theatre) {
        const showsForThisTheatre = shows.filter(
          (showObj) => showObj.theatre._id == show.theatre._id
        );
        uniqueTheatre.push({
          ...show.theatre._doc,
          shows: showsForThisTheatre,
        });
      }
      console.log(uniqueTheatre);
    });
    res.send({
      success: true,
      message: "Unique Theatre Fetched",
      data: uniqueTheatre,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get show by id

router.post("/get-show-by-id", authmiddleware, async (req, res) => {
  try {
    const show = await Show.findById(req.body.showId)
      .populate("movie")
      .populate("theatre");
    res.send({
      success: true,
      message: "Show Fetched",
      data: show,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
