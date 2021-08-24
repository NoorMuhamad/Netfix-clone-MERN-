const router = require("express").Router(); // it's Router method of express method
//The express.Router() function is used to create a new router object.
//This function is used when you want to create a new router object in your program to handle requests.
//express.Router( [options] )
const CryptoJS = require("crypto-js");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

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

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("wrong password or username ");
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const orginalPassword = bytes.toString(CryptoJS.enc.Utf8);
    orginalPassword !== req.body.password &&
      res.status(401).json("worng password and username");
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,{expiresIn:"5d"}
    );
    const { password, ...info } = user._doc; //Essentially, any time you try to deal with properties of a Mongoose model that aren't. a) defined in the model's schema or. b) defined as the same type (array, obj, ..) ... the model doesn't even behave like a normal Javascript object. Switching line 4 to foo. _doc
    res.status(200).json({...info,accessToken});
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
