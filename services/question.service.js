const Question = require("../models/questions.model");
const SubQuestion = require("../models/subquestion.model");

async function addQuestion(params, callback) {
  if (params.question == undefined) {
    return callback({
      message: "Invalid State Name",
    });
  } else {
    const isPresent = await Question.findOne({ question: params.question });

    if (isPresent == null) {
      if (params.answer == undefined || params.answer == null) {
        const addQuestion = new Question({
          question: params.question,
          answer: "",
        });
        addQuestion
          .save()
          .then((response) => {
            return callback(null, response);
          })
          .catch((err) => {
            return callback(err);
          });
      } else {
        const addQuestion = new Question(params);
        addQuestion
          .save()
          .then((response) => {
            return callback(null, response);
          })
          .catch((err) => {
            return callback(err);
          });
      }
    } else {
      return callback({ message: `${params.question} is already in database` });
    }
  }
}
async function getAnswer({ id }, callback) {
  const subAnswerData = await SubQuestion.findOne({ _id: id });
  if (subAnswerData == null) {
    const answerData = await Question.findOne({ _id: id });
    if (answerData.answer != "") {
      // onsole.log("Answer", answerData);
      return callback(null, { ...answerData.toJSON() });
    } else {
      const subQuedata = await SubQuestion.find({ question_id: id });
      return callback(null, subQuedata);
    }
  } else {
    return callback(null, { ...subAnswerData.toJSON() });
  }
}
module.exports = { addQuestion, getAnswer };
