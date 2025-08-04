const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            // return res.status(400).json({message:"User already exists"});
            throw new Error("user already exist with email")
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "48h" });
        //token is sent in the header
        res.setHeader("Authorization", `Bearer ${token}`);


        //creating cart left ==> after register 
        // await 

        res.status(201).json({ message: "User registered successfully", user: newUser, token });
    }
    catch (err) {
        res.status(500).json({message:`Error in registering user ${err.message}`});
        console.log(err);
        // throw new Error("Error in registering user", err)

    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ userId: user._id, role: user.role, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "48h" });
        res.setHeader("Authorization", `Bearer ${token}`);

        res.status(200).json({ message: "User logged in successfully", token });
    }
    catch (err) {
        // res.status(500).json({message:`Error in logging in user ${err.message}`});
        console.log(err);
        throw new Error("Error in logging in user", err)

    }
}

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password');   //.populate("addresss")
        res.json(user);
    } catch (err) {
        // res.status(500).json({ error: 'Server Error' });
        throw new Error("Server Error", err)
    }
};
const getProfileByEmail = async (req, res) => {
    try {
        console.log(req.user.email);
        const user = await User.findOne(req.user.email).select('-password');
        res.json(user);
    } catch (err) {
        // res.status(500).json({ error: 'Server Error' });
        throw new Error("Server Error", err)
    }
};
const getAllUsers = async (req, res) => {
    try {
        console.log(req.user.email);
        const user = await User.find();
        res.json(user);
    } catch (err) {
        res.status(500).send({ error: err.message });          //check 
        // throw new Error("Server Error", err)
    }
};

module.exports = { registerUser, loginUser, getProfile, getProfileByEmail }