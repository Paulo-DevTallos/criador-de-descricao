require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const routes = require('./routes');
const app = express();

app.use(logger('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use(routes)

module.exports = app