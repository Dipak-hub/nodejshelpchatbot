const questionController = require("../controllers/question.controller");
const express = require("express");
const router = express.Router();

router.post("/addquestion", questionController.addQuestion);
router.get("/getanswer/:id", questionController.getAnswer);

module.exports = router;
