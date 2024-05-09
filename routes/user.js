const express = require('express').Router()
const bcrypt = require('bcryptjs')
const { Router } = require('express')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

// Register User
Router.post('/register', async (req, res) => {
    const {name, email, password} = req.body
    try {

        let user = await User.findOne({email})
        if (user) {
            return res.status(400).json({error: "User already exists"});
        }
        const hashed_password = await bcrypt.hash(password, 10)
        user = new User({
            name,
            email,
            password: hashed_password
        })
        await user.save()
        return resstatus(201).json({message: "User created successfully"})

    } catch (err) {
        console.log(err.message)
    }
});

// Login User
router.post('/login', async (req, res) => {
    const {email, password} = req.body
    try {

        let user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({error: "Invalid Credentials"})
        }

        const isMatch = await bcrypt.compare(password, hashed_password)
        if (!isMatch) {
            return res.status(400).json({error: "Invalid Credentials"})
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });
        return res.json(token);

    } catch (err) {
        console.log(err.message)
    }
});

module.exports = router
