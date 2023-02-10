const express = require('express');
const app = express();
const PORT = process.env.port || 3001;
const router = require('./routes/apiRoutes');
const notes = require('./routes/htmlRoutes');


// Middleware for parsing JSON & urlencoded form data
app.use('/notes', notes);
app.use('/api/notes', router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.listen(PORT, () => {
    console.log("Server up & running");
})