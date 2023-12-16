const http = require('http');


const server = http.createServer(function (req, res) {
    console.log("Yashas");
});

server.listen(4000);