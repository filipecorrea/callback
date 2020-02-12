const http = require('http')
require('dotenv').config()

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/json'})
    res.end(`{ data:${process.env.KEY} }`)
}).listen(3000)
