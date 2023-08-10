const jsonServer = require("json-server"); //  json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // Port

server.use(middlewares);
server.use(router);

server.listen(port);