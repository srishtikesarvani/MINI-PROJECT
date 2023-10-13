const {Schema, model} = require('../connection')
const myschema = new Schema({
    Name:String,
    email:String,
    password:String
})
module.exports= model('Users',myschema)