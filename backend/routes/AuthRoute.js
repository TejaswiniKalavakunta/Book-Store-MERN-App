import express from "express";
import { User } from "../models/UserModel.js";

const router = express.Router();

// Route for user registration
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    // Check if required fields are provided
    if (!firstName || !lastName || !email || !password || !phoneNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create a new user document
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });

    // Save the new user to the database
    await newUser.save();

    // Successful registration
    return res
      .status(201)
      .json({ message: "Registration successful", user: newUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// Route for user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if required fields are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find the user in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the password matches
    if (password !== user.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Update last login timestamp (optional)
    user.lastLoginAt = new Date();
    await user.save();

    // Successful login
    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
