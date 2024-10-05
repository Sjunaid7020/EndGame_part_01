// install mongodb
//install mongoosejs
//require and setup connection
//make schema
//create model and export

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/test')

//schema matlab banne waala har document mein kya kya hoga

const userschema = mongoose.Schema({
    username: String,
    name: String,
    age: Number
})

module.exports = mongoose.model('user',userschema)