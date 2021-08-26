const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");
//create
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const saveMovie = await newMovie.save();
      res.status(201).json(saveMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowd :)");
  }
});
//update
router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You Cannot Update Movie :) !!");
  }
});
//delete
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(500).json("Movie Delete Successfully :)");
    } catch (err) {
      res.status(403).json(err);
    }
  } else {
    res.status(403).json("You Cannot Delelte Movies :) ");
  }
});
//GET
router.get("/find/:id", verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(403).json(err);
  }
});
//GET Random
router.get("/random", verify, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET All Movies
router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const movies=await Movie.find();
        res.status(500).json(movies.reverse());
      } catch (err) {
        res.status(403).json(err);
      }
    } else {
      res.status(403).json("You Cannot Delelte Movies :) ");
    }
  });


module.exports = router;
