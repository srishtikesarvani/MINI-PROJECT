const {Schema , model} = require('../connection')
const myschema = new Schema({
    title:String,
    type:String,
    rent:Number,
    email:String,
    contact:Number,
     image:String,
    createdAt:Date


});
module.exports = model('roomdata' , myschema);