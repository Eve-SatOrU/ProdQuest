
const tasks = require('../util/tasks');
exports.getindex =(req ,res ,next) => {
    res.render('index', { tasks: tasks.getAllTasks() });
  };
  
  exports.addtask =(req ,res ,next) => {
    const taskName = req.body.taskName;
    tasks.addTask(taskName);
    console.log(taskName);
    res.redirect('/');
  };
  
  exports.completeTask =(req ,res ,next) => {
    const taskIndex = req.params.taskIndex;
    tasks.completeTask(taskIndex);
    res.redirect('/');
  };
  
  exports.deleteTask =(req ,res ,next) => {
    const taskIndex = req.params.taskIndex;
    tasks.deleteTask(taskIndex);
    res.redirect('/');
  };
  
  exports.updatedTask = (req, res,next) => {
    const taskIndex = req.params.taskIndex;
    const updatedTaskName = req.body.updatedTaskName;
    tasks.updateTask(taskIndex, updatedTaskName);
    res.redirect('/');
  };
  
  