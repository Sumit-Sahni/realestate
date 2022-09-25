const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middleWares = jsonServer.defaults({
  static: "./build",
});

const port  = process.env.PORT || 8001;
server.use(middleWares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);
server.use(cors());
server.listen(port, ()=>{
    console.log(`Server is runnig on ${port}`);
});