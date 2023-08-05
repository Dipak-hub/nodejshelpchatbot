const mongoose = require("mongoose");
const { Schema } = mongoose;

const stateSchema = mongoose.Schema({
  state: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
const State = mongoose.model("state", stateSchema);
module.exports = State;
