/// <reference path="./typings/tsd.d.ts" />
var generalAPI = require('./GeneralAPI/generalAPI');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.set("port", 5000);
var staticDIR = path.resolve(__dirname, "./static");
app.use(express.static(staticDIR));
app.use(bodyParser.json());
app.use('/api', generalAPI);
app.get('*', function (req, res) {
    var indexViewPath = path.resolve(__dirname, './static/web/index.html');
    res.sendFile(indexViewPath);
    ;
});
app.listen(app.get("port"), function () {
    console.log("server started at ", app.get("port"));
});
