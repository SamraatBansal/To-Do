// Defining the Schema of The database and exporting the module

const mongoose = require('mongoose');

const taskListSchema = new mongoose.Schema({
    taskDescription:{
        type: String,
        required: true
    },
    taskCategory:{
        type: String,
        required: true
    },
    deadlineDate:{
        type: String,   //Used as String as moment.js was used to format the the time into string
        required: true
    }
});

const TaskList = mongoose.model('TaskList', taskListSchema);

module.exports = TaskList;