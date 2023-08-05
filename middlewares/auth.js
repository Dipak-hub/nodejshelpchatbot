const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, "APP_SECRET", (error, user) => {
    if (error) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}
function generateToken(id) {
  return jwt.sign({ data: id }, "APP_SECRET", {
    expiresIn: "12h",
  });
}

module.exports = {
  authenticateToken,
  generateToken,
};
