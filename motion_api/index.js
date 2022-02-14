'use strict';

// Import packages
const express = require('express');
const cors = require('cors')
const app = express();

// Route middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ping health route
app.get('/healthz', (req, res) => {
  try {
    res.status(200).json('Ok');
  } catch (error) {
    next(error)
  }
});

// Verify request
// Uncomment to deploy using gce ingress
app.use('/api/username', require("./routes/username"));

// Ping home route
app.get('/', (req, res) => {
  try {
    res.status(200).json('Ok');
  } catch (error) {
    next(error)
  }
});

// notfound route handler
app.use((req, res, next) => {
  const error = {
    statusText: new Error('Not Found'),
    status: 404
  };
  next(error);
})

// error handler
app.use((error, req, res, next) => {
  res.json({
    message: error.message,
    status: error.status || 500
  });
});

// Set up port and start the server
app.listen( process.env.PORT, () => {
	console.log(' - Server started port:', process.env.PORT);
	console.log(` - Local: http://localhost:${process.env.PORT}`);
});

module.exports = app;