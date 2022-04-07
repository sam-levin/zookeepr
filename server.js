const PORT = process.env.PORT || 3001;
const { animals } = require("./data/animals")
const express = require('express');
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('API server now on port ${PORT}')
});