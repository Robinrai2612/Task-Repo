const express = require("express");
const routing = express.Router();
const books = require("../service/details");

routing.get("/getBooks", (req, res) => {
  result = books.retrieveBooks();
  res.json(result);
});
