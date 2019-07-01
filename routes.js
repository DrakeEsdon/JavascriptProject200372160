const express = require('express');
const app = express();

// Import our page routes

const pageRoutes = require('./routes/pages');
const taskRoutes = require('./routes/tasks');

//register our page routes with our app
app.use('/', pageRoutes)
app.use('/tasks', taskRoutes);

//export changes
module.exports = app;