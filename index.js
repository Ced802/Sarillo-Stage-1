const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Javascript');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000')
});

/*
npm init -y
node index.js
*/