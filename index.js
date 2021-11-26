const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('sse server is running');
});

app.listen(port, () => {
    console.log(`Listening on port => ${port}`);
});

module.exports = app;