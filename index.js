const express = require('express');
const app = new express();

const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors =  require('cors');
app.use(cors());

const urlEncoded = bodyparser.json();

mongoose.connect('mongodb+srv://alex:!qwerty12@cluster0-qkswk.mongodb.net/test?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true });

const User = mongoose.model('User',{
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

app.use(express.static(__dirname + '/dist/app'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/app/index.html');
})

app.get('/users', (req, res) => {
    User.find({}, (err, data) => {
        if(err) throw err;
        res.json(data);
    })
})

app.post('/user', urlEncoded, (req, res) => {
    var user = new User({
        name: req.body.name,
        age: req.body.age
    });
})

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

