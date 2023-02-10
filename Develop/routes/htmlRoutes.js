const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');


notes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

notes.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = notes;