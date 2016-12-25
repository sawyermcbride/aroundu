/**
 * AroundU backend
 * BY Sawyer McBride, Dec 2016
 */

const express = require('express');
const app = express();
const pg = require('pg');
const bodyParser = require('body-parser')

const posts = require('./routes/posts');

app.set('port', process.env.port || 3000);
app.use(logger('dev'));
app.use(bodyParser());


app.use('/p', posts);

app.use(express.static('./bin'));