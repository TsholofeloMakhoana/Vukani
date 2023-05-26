const { default: mongoose } = require("mongoose");


const postsSchema=mongoose.Schema({
    title:{
        type: String
    },
    imageUrl:{
        type: String
    },
    description:{
        type:String
    },
    postedBy: {
       type: mongoose.Schema.Types.ObjectId,
        // type: String,
        required: true,
        trim: true,
        ref:'User' 
    },
    createdOn: Date,
    comments: [{
        type: String,
        body: "string",
        by:mongoose.Schema.Types.ObjectId
    }],
   
},
    {timestamps:true},
);





module.exports = mongoose.model('Posts', postsSchema);
