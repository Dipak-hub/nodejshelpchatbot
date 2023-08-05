const bcryptjs = require("bcryptjs");
const userService = require("../services/users.services");

exports.register = async (req, res, next) => {
  const { password } = req.body;
  const salt = await bcryptjs.genSalt(10);

  req.body.password = bcryptjs.hashSync(password, salt);

  userService.register(req.body, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  userService.login({ email, password }, (error, result) => {
    if (error) {
      return next(error);
    }
    return res.status(200).send({
      message: "Success",
      data: result,
    });
  });
};

exports.userProfile = (req, res, next) => {
  const id = req.params.id;
  userService.userProfile({ id }, (error, result) => {
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
