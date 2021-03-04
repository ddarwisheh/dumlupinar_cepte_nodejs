const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
    res.json({
        success: true
    })
});

exports.app = functions.https.onRequest(app);