/// <reference path="./typings/tsd.d.ts" />
var generalAPI = require('./GeneralAPI/generalAPI');
import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import mongoose = require('mongoose');

let app = express();

app.set("port",5000);

let staticDIR = path.resolve(__dirname , "./static");
app.use(express.static(staticDIR));
app.use(bodyParser.json());
app.use('/api', generalAPI);
// app.post('/api/login',(req:express.Request,res:express.Response)=>{
//     console.log(req.body);
// })
app.get('*',(req:express.Request, res:express.Response)=>{
    let indexViewPath = path.resolve(__dirname , './static/web/index.html');
    res.sendFile(indexViewPath);
;});


app.listen(app.get("port"),()=>{
   console.log("server started at " , app.get("port")); 
});

mongoose.connect('mongodb://localhost/pre');