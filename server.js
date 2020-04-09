const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
//console.log(process.env)
//console.log("Hello World");

// Database
mongoose.connect('mongodb://127.0.0.1:27017/signup-rest-api', { useNewUrlParser: true })
// promise
.then(() => console.log('Connected to database...'))
.catch(err => console.error(err));

// Middleware
app.use(express.urlencoded({extended: true }));
app.use(express.json());

// // Controllers
const UserControl = require('./controllers/UserControl');

// Routes
app.post('/api/user/create', UserControl.create);

// Start Server
app.listen(process.env.port || 3000, () => console.log('Server has started on port 3000...'));

