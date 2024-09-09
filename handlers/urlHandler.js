// handlers/urlHandler.js
const UrlModel = require('../models/url');

const UrlHandler = {
    // Handle creating a new short URL
    createShortUrl: (req, res) => {
        const { originalUrl } = req.body;
        const shortUrl = Math.random().toString(36).substring(2, 8); // Generate a simple short URL

        UrlModel.createUrl(originalUrl, shortUrl, (error, results) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(201).json({ shortUrl });
        });
    },

    // Handle retrieving the original URL
    getOriginalUrl: (req, res) => {
        const { shortUrl } = req.params;

        UrlModel.getUrlByShortUrl(shortUrl, (error, url) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            if (!url) {
                return res.status(404).json({ message: 'URL not found' });
            }
            res.redirect(url.original_url);
        });
    }
};

module.exports = UrlHandler;
