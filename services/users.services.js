const User = require("../models/users.model");
const bcrypt = require("bcryptjs");
const auth = require("../middlewares/auth");

async function login({ email, password }, callback) {
  const user = await User.findOne({ email });

  if (user != null) {
    if (bcrypt.compareSync(password, user.password)) {
      const token = auth.generateToken(user.id);

      return callback(null, { ...user.toJSON(), token });
    } else {
      return callback({
        message: "Invalid Username or password!!!",
      });
    }
  } else {
    return callback({
      message: "Invalid Username or password!!!",
    });
  }
}

async function register(params, callback) {
  if (params.username == undefined) {
    return callback({
      message: "Username is required",
    });
  }
  const user = new User(params);
  user
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function userProfile({ id }, callback) {
  const userData = await User.findOne({ id });

  return callback(null, { ...userData.toJSON() });
}

module.exports = {
  register,
  login,
  userProfile,
};
