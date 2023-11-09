// var http = require('http');

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('server created');
// };

const express = require("express");
const app = express();

// http://localhost:3000/home/12/Tim
// { id: '12', name: 'Tim' }
app.get("/home/:id/:name", (req, res) => {
  console.log(req.params);
  res.send("Test from server");
});

// http://localhost:3000/?name=Tim&age=33
// { name: 'Tim', age: '33' }
app.get("/", (req, res) => {
  console.log(req.query);
  console.log(req.query);
  res.send("Test from server 2");
});

app.listen(3000, () => {
  console.log("Listen to port 3000");
});
