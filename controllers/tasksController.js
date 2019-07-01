const Task = require('../models/task');

exports.index = (req,res) => {
    Task.find()
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

exports.completed = (req,res) => {
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
};

exports.show = (req,res) => {
        Task.findById(req.params.id)
        .then(task => {
        res.render('tasks/show', {
            task: task,
            title: task.title
        });
        })
        .catch(err => {
            res.redirect('/');
        });
    };

exports.new = (req,res) => {
    res.render('tasks/new',{
        //task variables
        title: 'Creating a new task'
    })
};

exports.create = (req,res) => {
    Task.create(
        req.body.task
    )
    .then(() =>{
        res.redirect('/tasks');
    })
        .catch(err => {
        res.redirect('/');
    });
    
};

exports.edit = (req, res) => {
    Task.findById(req.params.id)
        .then(blog => {
        res.render('tasks/edit', {
            task: task,
            title: task.title
        });
    })
        .catch(err => {
        res.redirect('/tasks/edit');
    });
};

exports.update = (req, res) => {
    
    Task.update({
        _id: req.body.id,
    })
    .then(() => {
        res.redirect(`/tasks/${req.body.id}`);
    })
    .catch(err => {
        res.redirect(`/tasks/${req.body.id}/edit`);
    });
};

exports.destroy = (req, res) => {
    
    Task.deleteOne({
        _id: req.body.id,
    })
    .then(() => {
        res.redirect('/tasks');
    })
    .catch(err => {
        res.redirect(`/tasks/`);
    });
};