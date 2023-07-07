const express = require("express");
const router = express.Router();

//import controllers and middlewares
const { userTransactionControllers } = require("../controllers");
const { login } = require("../middleware/authorize");
const upload = require("../middleware/upload");

router.get("/transactions?", userTransactionControllers.fetchAll);

module.exports = router;
