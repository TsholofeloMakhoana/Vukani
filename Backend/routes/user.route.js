const express = require('express');
const app = express();

const userRoute = express.Router();
let User = require('../models/user');



userRoute.route('/').get((req, res) => {
    User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

userRoute.route('/user/:id').get((req, res) => {
    User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = userRoute;