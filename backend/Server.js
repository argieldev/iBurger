const express = require("express");
const cors = require("cors");
const app = express(); // Express application instance

// middleware
app.use(express.json());
app.use(cors());

// import my route for auth
const authRoute = require("./Auth");

/* 
  app.METHOD("PATH", (HANDLER) => {  logic  });
  This is a route
*/
app.get("/", (req, res) => {
  res.send("Hello World");
});

// register route
app.use("/auth", authRoute);

// app.listen() method is called to start a server, passing the port number
app.listen(3000, () => {
  console.log("Listening");
});