// If modify task route is recieved then depending on further query module is exported accordingly

const TaskList = require('../models/TaskList.js');       //Requiring the database schema from the models folder
const moment = require('moment');       //Requiring moment.js to manipulate and format time into a string

// Add Task Function is exported
module.exports.addTask = function(req, res){

    let dDate = moment(req.body.deadlineDate).format("MMMM Do YYYY, h:mm:ss a");
    TaskList.create({
        taskDescription: req.body.taskDescription,
        deadlineDate: dDate,
        taskCategory: req.body.category
    }, function(err, dataRecieved)
    {
        if(err)
        {
            console.log('Error in creating task');
            return;
        }
        console.log('****', dataRecieved);
        return res.redirect('back');
    })
}

// Delete Task Function is exported
module.exports.deleteTask = function(req, res){
    let id = req.query.id;
    TaskList.findByIdAndDelete(id, function(err){
        if(err)
        {
            console.log("Error in deleting the task");
            return;
        }
        return res.redirect('back');
    })
}