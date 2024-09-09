// models/url.js
const pool = require('../config/database');

const UrlModel = {
    // Create a new URL entry
    createUrl: (originalUrl, shortUrl, callback) => {
        const query = 'INSERT INTO urls (original_url, short_url) VALUES (?, ?)';
        pool.query(query, [originalUrl, shortUrl], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results);
        });
    },

    // Get a URL entry by short URL
    getUrlByShortUrl: (shortUrl, callback) => {
        const query = 'SELECT * FROM urls WHERE short_url = ?';
        pool.query(query, [shortUrl], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results[0]);
        });
    },

    // Get a URL entry by original URL
    getUrlByOriginalUrl: (originalUrl, callback) => {
        const query = 'SELECT * FROM urls WHERE original_url = ?';
        pool.query(query, [originalUrl], (error, results) => {
            if (error) {
                return callback(error);
            }
            callback(null, results[0]);
        });
    }
};

module.exports = UrlModel;
