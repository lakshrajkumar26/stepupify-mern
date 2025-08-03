const express = require("express");
const router = express.Router();
const {registerUser, loginUser, getProfile} = require("../controller/userController");
const {verifyToken} = require("../middleware/authMiddlewware");     


router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/profile",verifyToken,getProfile);


module.exports= router;