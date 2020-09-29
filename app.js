const http = require("http");
const port = 3000;

const handler = (request, response) => {
  console.log("New user!");
  response.end("Hello User");
};
const server = http.createServer(handler);

server.listen(port, (err) => {
  if (err) {
    return console.log("Something was wrong");
  }
  console.log("server start");
});
