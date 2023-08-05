const SubQuestion = require("../models/subquestion.model");

async function addSubQues(params, callback) {
  if (params.question == undefined) {
    return callback({
      message: "Invalid State Name",
    });
  } else {
    const isPresent = await SubQuestion.findOne({ question: params.question });
    if (isPresent == null) {
      const addQuestion = new SubQuestion(params);
      addQuestion
        .save()
        .then((response) => {
          return callback(null, response);
        })
        .catch((err) => {
          return callback(err);
        });
    } else {
      return callback({ message: `${params.question} is already in database` });
    }
  }
}
module.exports = { addSubQues };
