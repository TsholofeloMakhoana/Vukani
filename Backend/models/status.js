const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Status = new Schema({
    createdByName: {
      type: String
    },
    createdOn: {
      type: String
    },
    comment: {
      type: String
    }
  }, {
    collection: 'Statuses'
  })
   
  module.exports = mongoose.model('Status', Status)



