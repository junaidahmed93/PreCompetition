import {saveUser} from "../Datasets/dataSets";
import express = require('express');
let router = express.Router();

router.post("/login",(req:express.Request, res:express.Response)=>{
    console.log(req.body.data);
    saveUser(req.body.data);
    
});

module.exports = router;
