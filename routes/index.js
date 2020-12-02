const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller.js');

router.use('/modify', require('./modify.js'));  //If modify is recieved in url require route from modify.js
router.get('/', homeController.home);  //Render the Home page from Home Controller

module.exports = router;