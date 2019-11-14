const express = require('express');
const app = new express();

const bodyparser = require('body-parser');
const urlEncoded = bodyparser.json();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://alex:!qwerty12@cluster0-qkswk.mongodb.net/test?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true });

const cors =  require('cors');
app.use(cors());


const User = mongoose.model('user',{
    name: {
        type: String},
    age: {
        type: Number},
});

app.use(express.static(__dirname + '/dist/app'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/app/index.html');
})

app.get('/user', (req, res) => {
    User.find({}, (err, data) => {
        if(err) throw err;
        res.json(data);
    })
})

app.get('/user/:id', (req, res)=>{
    User.findOne({_id:req.params.id},(err, data)=>{
        if(err) throw err 
        res.json(data)
    })
})

app.post('/user',urlEncoded,(req, res)=>{
    var user = new User({
        name: req.body.name,
        age: req.body.age,
    })

    user.save((err)=>{
        if(err)throw err
        res.json({msg:"Added!"})
    })
})

app.put('/user/:id', urlEncoded, (req, res)=>{
    User.updateOne({_id:req.params.id},{
        name: req.body.name,
        age:req.body.age
    },(err)=>{
        if(err)throw err
        res.json({msg:"Updated!"})
    })
})

app.delete('/user/:id', (req, res)=>{
    User.deleteOne({_id:req.params.id},(err)=>{
        if(err)throw err
        res.json({msg:"Deleted!"})
    })
})

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

