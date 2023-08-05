const State = require("../models/state.models");
const stateData = [
  "Andaman & Nicobar",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra & Nagar Haveli",
  "Daman & Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu & Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Orissa",
  "Pondicherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Tripura",
  "Uttar Pradesh",
  "Uttaranchal",
  "West Bengal",
];

async function addState(params, callback) {
  if (params.state === undefined) {
    return callback({
      message: "Invalid State Name",
    });
  } else {
    const isPresent = await State.findOne(params);
    if (isPresent === null) {
      const addState = new State(params);
      addState
        .save()
        .then((response) => {
          return callback(null, response);
        })
        .catch((err) => {
          return callback(err);
        });
    } else {
      return callback({
        message: `${params.state} is already in DB`,
      });
    }
  }

  //   console.log(stateData);
  // console.log(state);
  // if (params.state === undefined) {
  //   stateData.map((e) => {
  //     const state = new State({ state: e });
  //     state
  //       .save()
  //       .then((response) => {
  //         return callback(null, "Added All");
  //       })
  //       .catch((err) => {
  //         return callback(err);
  //       });
  //   });
  // }
}

async function getStates(params, callback) {
  const states = await State.find({}).sort({ state: "ascending" });
  //   console.log(states);
  return callback(null, { ...states });
}

async function deleteStates(params, callback) {
  const states = await State.remove({});

  return callback(null, { ...states });
}
module.exports = { addState, getStates, deleteStates };
