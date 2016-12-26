const express = require('express');
const posts = express.Router();

posts.get('/', (req, res) => {
    //TODO
});
posts.get('/:id', (req, res) => {

});
posts.get('/:zip/:id', (req, res) => {

});
posts.post('/new', (req, res) => {

});

module.exports = posts;