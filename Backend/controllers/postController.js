const { id } = require('date-fns/locale')
const Post = require('../models/posts')



const createNewPost = async (req, res) => {
    const { title, imageUrl, postedBy } = req.body

    // Confirm form
    if (!postedBy) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const postObject = {title, imageUrl, postedBy}

    // Create and store new user 
    const post = await Post.create(postObject)

    if (post) { //created 
        res.status(201).json({ message: `New post ${title} created` })
    } else {
        res.status(400).json({ message: 'Invalid post data received' })
    }
}

//get all posts
const getAllPosts = async (req, res) => {
    // Get all users from MongoDB
    const postObj = await Post.find()

    // If no users 
    if (!postObj?.length) {
        return res.status(400).json({ message: 'No posts found' })
    }
    res.json(postObj)
}


module.exports = {
    createNewPost,
    getAllPosts
}