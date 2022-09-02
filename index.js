const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000
let port = process.env.PORT || 80

const server = http.createServer(function(req,res){
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1 }, null, 3));
});

server.listen(port, () => {
  console.log(`Server running ...`)
})