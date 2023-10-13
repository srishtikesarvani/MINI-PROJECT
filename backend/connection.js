const mongoose = require('mongoose')
const url = 'mongodb+srv://srishtikesarvani52:swity123@cluster0.rvcagnf.mongodb.net/mydb?retryWrites=true&w=majority'
//asyncronus function and return promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports =mongoose;