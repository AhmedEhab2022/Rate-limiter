const express = require('express');
const testRoutes = require('./routes/test.js');
const app = express();

const port = 8080;

app.use('/', testRoutes);

app.listen(port);
