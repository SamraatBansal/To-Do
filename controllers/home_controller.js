// Function to render Home Page

const TaskList = require('../models/TaskList.js'); //Requiring the database schema from the models folder

module.exports.home = function(req, res){
    TaskList.find({}, function(err, tasks){
        if(err)
        {
            console.log('Error in finding the tasks');
            return;
        }
        return res.render('to-do', {
            title: "To-Do List", //Passing the title of the page
            task_list: tasks     //Passing all the collections found in db
        })
    })
}