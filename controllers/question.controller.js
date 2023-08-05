const questionService = require("../services/question.service");

exports.addQuestion = async (req, res, next) => {
  questionService.addQuestion(req.body, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(201).send({
      message: "Success",
      data: result,
    });
  });
};
exports.getAnswer = async (req, res, next) => {
  const id = req.params.id;
  questionService.getAnswer({ id }, (error, result) => {
    if (error) {
      return res.status(401).send({
        message: "Access Forbidden",
      });
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};
