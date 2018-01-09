const http = require('http');
const PORT = 8000;
const fs = require('fs');

let app = function(req, res) {
  res.setHeader('Content-Type','text/html')
  res.write(fs.readFileSync('./guestBook.html'));
  res.end();
}

let server = http.createServer(app);
server.listen(PORT);
console.log(`server is listening ${PORT}`);
