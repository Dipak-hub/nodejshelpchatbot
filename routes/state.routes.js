const stateController = require("../controllers/state.controllers");
const express = require("express");
const router = express.Router();

router.post("/addState", stateController.addState);
router.get("/getStates", stateController.getStates);
router.get("/deleteStates", stateController.deleteStates);

module.exports = router;
