const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: "mongodb+srv://TK:" + encodeURIComponent("Thabo#9") +  "@tk.bq4ujus.mongodb.net/test?retryWrites=true"
    }
}


exports.get = function get(env){
    return config[env] || config.default
}
