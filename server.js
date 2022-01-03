const fs = require('fs');
const path = require('path');
const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//makes the files in the public folder readily available
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//adds routes to other files in folder for the server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});