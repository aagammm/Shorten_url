// routes/index.js
const express = require('express');
const UrlHandler = require('../handlers/urlHandler');

const router = express.Router();

// Route to create a new short URL
router.post('/shorten', UrlHandler.createShortUrl);

// Route to get the original URL from the short URL
router.get('/:shortUrl', UrlHandler.getOriginalUrl);

module.exports = router;
