const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Validation
const Joi = require('@hapi/joi');
const schema = Joi.object({
    name: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
});

router.post('/register', async (req, res) => {

    // Validate data 
    const {error} = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Checking if the user is already in the database
    const userExist = await User.findOne({
       name: req.body.name 
    });
    if(userExist) return res.status(400).send("User already exists");

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const user = new User({
        name: req.body.name,
        password: hashPassword
    });

    // Save user
    try {
        const savedUser = await user.save();
        res.send({user: user.name});
    } catch(err) {
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {
    // Validate data 
    const {error} = schema.validate(req.body);
    if(error) return res.json(400).send(error.details[0].message);

    // Checking if the user is already in the database
    const user = await User.findOne({
        name: req.body.name 
    });
    if(!user) return res.json(400).send("Username or password is wrong");
    // Check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.json(400).send("Username or password is wrong");
    // Create JWT
    const token = jwt.sign({name: user.name}, process.env.TOKEN_SECRET);
    // res.header('token', token).send(token);
    res.json(token)
});

module.exports = router;