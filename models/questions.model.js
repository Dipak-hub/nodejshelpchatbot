const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
  },
});

const Questions = mongoose.model("questions", questionSchema);

module.exports = Questions;
