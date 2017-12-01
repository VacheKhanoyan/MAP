
const bodyparser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
const api_v1 = require('./Controllers/api');
api_v1.initialize(app);

app.listen(3007);
console.log("Server is run");
