const express = require('express');
const router = express.Router();
const  modifyTaskController = require('../controllers/modify-task_controller.js');

router.post('/add-task', modifyTaskController.addTask);     //To post the added task execute the add task function from modify Controller
router.get('/delete-task', modifyTaskController.deleteTask);  //To get the remaining list after deleting task by executing the delete task function from modify Controller

module.exports = router;