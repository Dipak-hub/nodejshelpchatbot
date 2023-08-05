const mongoose = require("mongoose");

const subquestionSchema = mongoose.Schema({
  question_id: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});
const SubQuestions = mongoose.model("subquestion", subquestionSchema);
module.exports = SubQuestions;
