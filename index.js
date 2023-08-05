const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");
const auth = require("./middlewares/auth");
const errors = require("./middlewares/errors");
require("dotenv").config({ path: __dirname + "/.env" });

// console.log(process.env.api_name);
const { unless } = require("express-unless");

const app = express();

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database Connected");
    },
    (error) => {
      console.log("Error connecting Db:", error);
    }
  );

auth.authenticateToken.unless = unless;
app.use(
  auth.authenticateToken.unless({
    path: [
      { url: "/users/login", methods: ["POST"] },
      { url: "/users/register", methods: ["POST"] },
    ],
  })
);

app.use(express.json());

app.use("/users", require("./routes/users.routes"));
app.use("/state", require("./routes/state.routes"));
app.use("/question", require("./routes/question.routes"));
app.use("/subque", require("./routes/subQue.routes"));
app.use(errors.errorHandler);
app.listen(process.env.port || 4000, function () {
  console.log("Server is Ready...");
});
