const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')
const generateToken = require('../utils/generateToken')

// register user
//@route POST api/users/
//@access public
const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body

    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400).json("User Exists")
    }

    const user = await User.create({
        name,
        email,
        password,



    })

    if (user) {
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json("Invalid User data")
    }


})

// Authenticate User & get token
//@route POST api/users/login
//@access public
const authUserSingle = asyncHandler(async(req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)



        })

    } else {
        res.status(401).send({ message: 'Invalid email or password' })
    }


})



module.exports = { registerUser, authUserSingle }