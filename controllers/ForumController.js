const asyncHandler = require('express-async-handler')
const ForumModel = require('../models/forumModel')


//@ Create forum 
//@route  POST /api/store/
//@access private Admin 

const createForum = asyncHandler(async(req, res) => {
    const forum = await ForumModel({
        title: "Sample Name",
        user: req.user.name,
        description: "sample description",
        category: "Sample category",
        image: "Sample URL"
    })
    const createdForum = await forum.save()
    res.status(201).json(createdForum)
})

const getAllForums = asyncHandler(async(req, res) => {
    await ForumModel.find()
        .then((forums) => res.json(forums))
        .catch((err) => res.status(400).json("Error" + err));
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getSingleForum = asyncHandler(async(req, res) => {
    const forum = await ForumModel.findById(req.params.id)

    if (forum) {
        return res.status(200).json(forum)
    } else {
        res.status(404).json({ message: 'forum not found' })
    }
})

//@DELETE Forum
//@toute post /delete

const deleteForum = asyncHandler(async(req, res, ) => {
    const forum = await ForumModel.findById(req.params._id)



    if (forum) {
        await forum.remove()
        res.json({ message: "Item Deleted " })

    } else {
        res.status(404).json({ message: "Item Not Found" })
    }

})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateForum = asyncHandler(async(req, res) => {
    const {
        title,
        description,
        image,
        category,
    } = req.body

    const forum = await ForumModel.findById(req.params.id)

    if (forum) {
        forum.title = title

        forum.description = description
        forum.image = image

        forum.category = category


        const updatedforum = await forum.save()
        res.json(updatedforum)
    } else {
        res.status(404).json({ message: 'Product not found' })
    }
})

//@ Create new review 
//@route  POST /api/store/:id/reviews
//@access private  

const createForumComments = asyncHandler(async(req, res) => {
    const sort = { length: -1 };
    const { name, comment } = req.body

    const forum = await ForumModel.findById(req.params.id).sort(sort)

    if (forum) {


        const newComment = {
            name: req.user.name,
            comment,
            user: req.user._id,
        }
        console.log(newComment)

        forum.reviews.push(newComment)

        forum.newComment = forum.reviews.length

        await forum.save()
        res.status(201).json(forum)
    } else {
        res.status(404).json({ message: 'forum not found' })
    }
})

module.exports = { createForum, deleteForum, createForumComments, getAllForums, getSingleForum, updateForum }