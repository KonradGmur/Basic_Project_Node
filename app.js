const http = require("http");
const port = 3000;

const handler = (request, response) => {
  console.log("New user!");
};
const server = http.createServer(handler);

server.listen(port, () => {
  console.log("server start");
});
