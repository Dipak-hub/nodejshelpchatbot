const subQueController = require("../controllers/subques.controller");
const express = require("express");
const router = express.Router();

router.post("/addSubQue", subQueController.addSubQues);

module.exports = router;
