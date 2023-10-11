const express = require("express");
const app = express();
const port = 3000;
const path = require('path');

//static website load
const staticPath = path.join(__dirname, "public");
// app.use(express.static(staticPath));
//get method
app.get("/", (req, res) => {
  res.send("Hello World");
});

//post method
app.post("/", (req, res) => {
  res.send("Got a POST request");
});

//put method
app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

//delete method
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});


app.listen(port, () => {
  console.log(`Port are running ${port}`);
});
