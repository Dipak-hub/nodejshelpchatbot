const stateService = require("../services/state.services");

exports.addState = async (req, res, next) => {
  stateService.addState(req.body, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};

exports.getStates = async (req, res, next) => {
  stateService.getStates(null, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};
exports.deleteStates = async (req, res, next) => {
  stateService.deleteStates(null, (error, result) => {
    if (error) {
      return next(error);
    }

    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};
