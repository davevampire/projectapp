// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb+srv://it3in1:flRunCrmBfxZqwTH@appprojectx.ck5qykr.mongodb.net/?retryWrites=true&w=majority&appName=appprojectx', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for the user data
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Function to validate email address
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Handle POST request for sign-up
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    // Validate the data
    if (!username || !email || !password) {
        return res.status(400).send('Please fill in all fields');
    }

    // Check if the email is valid
    if (!validateEmail(email)) {
        return res.status(400).send('Please enter a valid email');
    }

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).send('Username already taken');
    }

    // Create a new user instance
    const newUser = new User({ username, email, password });

    // Save the user to the database
    await newUser.save();

    // Return a success message
    res.send('User registered successfully');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
