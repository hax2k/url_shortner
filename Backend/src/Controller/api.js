const express = require('express');

const shortUrlRouter = require('../Controller/shortUrl/shortUrl.router');
const userRouter = require('../Controller/Auth/users');

const api = express.Router();


api.use('/', shortUrlRouter);
api.use('/', userRouter);

module.exports = api;