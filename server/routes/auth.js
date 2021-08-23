const router = require("express").Router(); // it's Router method of express method
//The express.Router() function is used to create a new router object.
//This function is used when you want to create a new router object in your program to handle requests.
//express.Router( [options] )
const CryptoJS = require("crypto-js");
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
