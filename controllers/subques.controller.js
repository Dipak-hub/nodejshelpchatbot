const subqueService = require("../services/subques.service");

exports.addSubQues = async (req, res, next) => {
  subqueService.addSubQues(req.body, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(201).send({
      message: "Success",
      data: result,
    });
  });
};
