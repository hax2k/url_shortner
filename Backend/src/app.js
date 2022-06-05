const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authJwt = require("./Helper/jwt");
const errorHandler = require("./Helper/error-handler");

const api = require('./Controller/api');

const app = express();

//Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(morgan('tiny'));
// app.use(authJwt());
app.use(errorHandler);

//routes
app.use("/", api);

module.exports = app;