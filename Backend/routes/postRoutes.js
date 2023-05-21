const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')


router.route('/')
    .get(postController.getAllPosts)
    .post(postController.createNewPost)

router.route('/')
    .get(postController.getAllPosts)

    
//router.route('/:id')
 //   .delete(postController.DeleteProduct)

    

module.exports = router