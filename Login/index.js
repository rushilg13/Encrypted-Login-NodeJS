const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

app.get('/login', function (req, res){
    res.sendFile(__dirname + "/login.html");
});

app.post('/login', function (req, res){
    console.log(req.body.email);
    console.log(req.body.psw);
    let encrypted = crypto.createHash('sha256').update(req.body.psw).digest('hex');
    console.log(encrypted);
    res.send("Submitted!");
});

app.listen(3000, () => {
    console.log("Server Running at http://localhost:3000");
})