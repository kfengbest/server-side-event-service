const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const sse = require('./worker/sse');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)

sse.start();

app.listen(port, () => {
    console.log(`Listening on port => ${port}`);
});

module.exports = app;