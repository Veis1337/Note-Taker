const express = require('express');
const path = require('path');
const db = require('./db/db.json');
const router = require('./routes/apiRoutes');
const notes = require('./routes/htmlRoutes');
const app = express();

// Heroku compatibility, otherwise default to 3001 local port
const PORT = process.env.port || 3001;

// Middleware for parsing JSON & urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Using these paths for the routes, so that we may just define them as "/" in their respective file.
app.use('/api/notes', router);
app.use('/notes', notes);

// * is the default path, even if all other gets fail
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server up & running @ http://localhost:${PORT}`);
});