const app = require('./server')
const sse = require('./worker/sse');

const config = require('config');
const port = config.get('server.port');

sse.start();

app.listen(3000, () => {
    console.log(`Listening on port => 3000`);
});

