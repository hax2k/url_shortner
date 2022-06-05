const express = require('express');
const { getAllUrl, postUrl, getShortUrlById, deleteUrl } = require('../shortUrl/shortUrl.controller');

const shortUrlRouter = express.Router();


shortUrlRouter.get('/', getAllUrl);
shortUrlRouter.get('/:shortUrl', getShortUrlById);
shortUrlRouter.post('/', postUrl);
shortUrlRouter.delete('/:id', deleteUrl);


module.exports = shortUrlRouter;