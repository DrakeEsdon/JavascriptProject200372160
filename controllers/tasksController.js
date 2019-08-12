const Task = require('../models/task');

exports.index = (req,res) => {
    Task.find()
    .then(tasks => res.json(tasks))
     .catch(err => res.status(404).json(err));
};

/*exports.completed = (req,res) => {
    Task.find().completed()
    .then(tasks => {
        res.render('tasks/index', {
            tasks: tasks,
            title: 'To Do List'
        });
    })
    .catch(err => {
        res.redirect('/');
    });
};

 
exports.started = (req,res) => {
    Task.find().started()
    .then(tasks => {
        res.render('tasks/index', {
            tasks: tasks,
            title: 'To Do List'
        });
    })
    .catch(err => {
        res.redirect('/');
    });
};
          
exports.toBeCompleted = (req,res) => {
    Task.find().toBeCompleted()
    .then(tasks => {
        res.render('tasks/index', {
            tasks: tasks,
            title: 'To Do List'
    });
    })
    .catch(err => {
        res.redirect('/');
    });
};*/

exports.show = (req,res) => {
        Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(404).json(err));
    };

/*exports.new = (req,res) => {
    res.render('tasks/new',{
        //task variables
        title: 'Creating a new task'
    })
};*/

exports.create = (req,res) => {
    Task.create(
        req.body.task
    )
    .then(() => res.status(200).send({success: "Task Created"}))
    .catch(err => res.status(404).send(err));
    
};

exports.edit = (req, res) => {
    Task.findById(req.params.id)
        .then(task => res.send(task))
        .catch(err => res.status(404).send(err));
};

exports.update = (req, res) => {
    
    Task.update({
        _id: req.body.id,
    })
    .then(() => res.status(200).send({success: "Task Updated Successfully"}))
    .catch(err => res.status(404).send(err));
};

exports.destroy = (req, res) => {
    
    Task.deleteOne({
        _id: req.body.id,
    })
    .then(() => res.status(200).send({success: "Task Deleted"}))
    .catch(err => res.status(404).send(err));
};