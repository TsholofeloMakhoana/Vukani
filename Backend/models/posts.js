const { default: mongoose } = require("mongoose");


const postsSchema=mongoose.Schema({
    title:{
        type: String
    },
    imageUrl:{
        type: String
    },
    postedBy: {
       type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User' 
    },
    // comments:[{
    //     text:String,
    //     postedBy:{type:ObjectId,ref:"User"}
    // }],
},
    {timestamps:true},
);





module.exports = mongoose.model('Posts', postsSchema);
