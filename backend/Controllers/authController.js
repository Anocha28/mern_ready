
const asyncHandler = require('express-async-handler')
const User = require('../Models/userModel')
const generateToken = require('../Config/generateToken')


//@dec      Register a new user
//@route    POST /api/auth
//@access   Public
const registerUser = asyncHandler (async (req, res) => {
    const {name, email , password} = req.body
    const userExists = await User.findOne({email})

   if(userExists){
       res.status(400)
       throw new Error('This email is already in used.')
   }

   const user = await User.create({
       name,
       email,
       password
   })

   if(user) {
       res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
       })
   } else {
       res.status(400)
       throw new Error('Invalid user data.')
   }
})


//@dec      Auth user & get token
//@route    POST /api/users/login
//@access   Public
const authUser = asyncHandler (async (req, res) => {

    const {email , password} = req.body

    const user = await User.findOne({email})
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: await generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password.')
    }
})

module.exports = {
    registerUser,
    authUser,
}