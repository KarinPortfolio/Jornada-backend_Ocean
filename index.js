/* cria app express */
const express = require("express");
const app = express();
/* chama app */
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/oi", function (req, res) {
  res.send("ola mundo");
});

/* app listen  - mostra o app*/
app.listen(3000);