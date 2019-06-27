if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Imports
const chalk = require('chalk');
const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

// Require routes
const indexRoute = require('./routes/index');

// Setting up express
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(layouts);
app.set('layout', 'layouts/layout');

// Connect to mongoDB with mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

// error handling the database
const db = mongoose.connection;

db.on('connected', () => {
  console.log(chalk.green('[Mongoose] ') + 'Mongodb connected on port 27017');
});

db.on('error', error => {
  console.log(chalk.red('[Mongoose error] ') + error);
});

db.on('disconnected', () => {
  console.log(chalk.red('[Mongoose] ') + 'disconnected from mongodb');
});

// Use the routes that are imported
app.use('/', indexRoute);

// Setting up port and start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    chalk.green('[Server] ') + `Started on: http://localhost:${port}`
  );
});
