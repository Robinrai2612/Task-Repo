const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/routing");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", router);
app.listen(3000);
console.log(" RESTful API server started on: 3000");
