const express = require('express');
const router = express.Router();
const {resultString,fieldSuggested}=require("../controllers/result")

router.post("/result",resultString)
router.post("/fields",fieldSuggested)


module.exports=router