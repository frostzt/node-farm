const fs = require('fs');
const http = require('http');
const url = require('url');


// Server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end("This is OVERVIEW");
    } else if (pathName === '/product') {
        res.end("This is PRODUCT");
    } else if (pathName === '/api') {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'mans-not-hot': 'something'
        });
        res.end('<h1>PAGE NOT FOUND!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening requests on port 8000');
});