const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const sse = require('./worker/sse');
const app = express();
const config = require('config');
const port = config.get('server.port');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)

sse.start();

app.listen(port, () => {
    console.log(`Listening on port => ${port}`);
});

module.exports = app;