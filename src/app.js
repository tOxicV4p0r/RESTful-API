const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const api = require('./routes/api');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/v1', api);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ message: 'Something went wrong!' });
});

module.exports = app;
