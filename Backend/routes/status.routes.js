const express = require('express');
const app = express();

const postRoute = express.Router();
let Status = require('../models/status');


postRoute.route('/createStatus').post((req, res, next) => {
    Status.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

postRoute.route('/').get((req, res) => {
    Status.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

postRoute.route('/status/:id').get((req, res) => {
    Status.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

postRoute.route('/update-status/:id').put((req, res, next) => {
    Status.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('status updated successfully!')
    }
  })
})

postRoute.route('/delete-Status/:id').delete((req, res, next) => {
    Status.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = postRoute;