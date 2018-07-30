const express = require('express')
const path = require('path');
const app = express();
const im = require("angular-background-image");
const slick = require("slick-carousel")
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '/client/dist/client/')))



const port = 8000;

app.all('**', (req, res)=>{
    res.sendFile(path.join(__dirname,'./client/dist/client/index.html'))
})
app.listen(port, function(){
    console.log("listen 8000!!!")
})