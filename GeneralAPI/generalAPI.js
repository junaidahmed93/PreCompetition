var dataSets_1 = require("../Datasets/dataSets");
var express = require('express');
var router = express.Router();
router.post("/login", function (req, res) {
    console.log(req.body.data);
    dataSets_1.saveUser(req.body.data);
});
module.exports = router;
