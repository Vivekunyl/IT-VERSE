const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home_controller.js");
const auth = require("../middlewares/authenticate");

router.get('/',auth,homeController.getHome);

module.exports = router;