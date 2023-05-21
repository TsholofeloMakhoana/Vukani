const { default: mongoose } = require("mongoose");


const postsSchema=mongoose.Schema({
    title:{
        type: String
    },
    imageUrl:{
        type: String
    },
    postedBy: {
      type:  String
       // type: mongoose.Schema.Types.ObjectId,
        // required: true,
        // trim: true,
        // ref:'User' 
    },
    comments:[{
        body:"string",
        by:mongoose.Schema.Types.ObjectId
    }],
    date: Date,

   
},
    {timestamps:true},
);





module.exports = mongoose.model('Posts', postsSchema);
