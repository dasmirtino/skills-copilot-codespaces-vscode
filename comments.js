// Create web server
const http = require('http');

// Create web server
const server = http.createServer((req, res) => {
  // Handle incoming requests
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is your web server!');
});

// Specify the port for the server to listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
