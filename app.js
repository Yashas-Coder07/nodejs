const http = require('http');


const server = http.createServer(function (req, res) {
    const url = req.url;
    if (url === "/home") {
        res.write("<html>")
        res.write("<head><title>Home Page</title></head>");
        res.write("<body><h1>Welcome Home</h1></body>")
        res.write("</html>")
    }
    else if (url === "/about") {
        res.write("<html>")
        res.write("<head><title>About Page</title></head>");
        res.write("<body><h1>Welcome to About Us Page</h1></body>")
        res.write("</html>")
    }
    else if (url === "/node") {
        res.write("<html>")
        res.write("<head><title>Welcome Page</title></head>");
        res.write("<body><h1>Welcome to my Node Js project.</h1></body>")
        res.write("</html>")
    }
    res.end();
});

server.listen(4000);