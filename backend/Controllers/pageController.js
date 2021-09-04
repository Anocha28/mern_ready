const asyncHandler = require('express-async-handler')
const Page = require('../Models/pageModel')

//@dec      get a page
//@route    GET /api/page
//@access   Private
const getPage = asyncHandler (async (req, res) => {
    const pages = await Page.find({})
    if(pages){
        res.status(200).json(pages)
    } else {
        res.status(200).json('no page to show')
    }
})

//@dec      create a page
//@route    POST /api/page
//@access   Private
const createPage = asyncHandler (async (req, res) => {
    if(req.body.item){
        const {item} = req.body
        const createdPage = await Page.create({
            item
        })
    
        if(createdPage) {
            res.status(201).json(createdPage)
        } else {
            res.status(400)
            throw new Error('Invalid data.')
        }
    } else {
        res.json('empty data.')
    }
    
})



module.exports = {getPage, createPage}