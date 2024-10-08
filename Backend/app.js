const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error')

app.use(express.json());

// Routes import
const product = require("./routes/productRoute");
app.use('/api/v1', product);


// Middleware for errors
app.use(errorMiddleware);

module.exports = app