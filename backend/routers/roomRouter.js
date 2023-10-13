const express = require('express');
const Model = require('../Models/roomModel');
// const router = require('./userRouter');

const router = express.Router();
router.post('/add', (req, res) => {
    console.log(req.body)
    // res.send('response from product add')
    new Model(req.body).save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        })

})
// product.get('/getall', (req, res) => {
//     res.send('response from product getall')
// })
router.get('/getall', (req, res) => {
    Model.find({})
    .then((result)=>{
     res.json(result);
 
    }).catch((err)=>{
        res.status(500).json(err)
    })
 })
 router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result)=>{
     res.json(result)
    }).catch((err)=>{
    //  res.json(err)
    res.status(500).json(err)
    })
 })
 router.get('/getbyrent/:rent', (req, res)=>{
    console.log(req.params.email)
    Model.findOne({email: req.params.email})
    .then((result)=>{
     res.json(result);
 
    }).catch((err)=>{
    //  res.json(err)
    res.status(500).json(err)
    })
})
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id , req.body, {new: true})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
    // res.send('response from product update')
})

router.delete('/delete/:id', (req, res) => {
    // res.send('response from user delete')
    Model.findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
})
module.exports = router;