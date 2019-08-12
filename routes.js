const express = require('express');
const app = express();

// Import our routes
const taskRoutes = require('./routes/tasks');

//register our routes with our app
app.use('/tasks', taskRoutes);

//export changes
module.exports = app;