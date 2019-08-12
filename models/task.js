const mongoose = require('mongoose');

//Our schema
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    status: {
        type: String
    }
}, {
    timestamps: true
});

TaskSchema.query.completed = function() {
    return this.where({
        status: 'Completed'
    });  
};

TaskSchema.query.started = function() {
    return this.where({
        status: 'Started'
    });

};

TaskSchema.query.toBeCompleted = function() {
    return this.where({
        status: 'To be Completed'
    });

};


module.exports = mongoose.model('Task', TaskSchema);