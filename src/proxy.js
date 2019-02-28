const express = require('express');
const cors = require('cors');
const rp = require('request-promise');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
};

app.get('/:pkg', cors(corsOptions), (req, res) => {
    const { pkg } = req.params;

    rp({
        url: `https://registry.npmjs.org/${pkg}/latest`,
        json: true
    }).then(apiRes => {
        res.status(200).json({body: apiRes});
    });
});

app.listen(1111, err => {
    console.log('Listening on port 1111')
});