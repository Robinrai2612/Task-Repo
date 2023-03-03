module.exports = (app) => {
  const tutorials = require("../controllers/todolists.controller.js");

  var router = require("express").Router();

  router.post("/", todolists.create);
  router.get("/", todolists.findAll);
  router.get("/published", todolists.findAllPublished);
  router.get("/:id", todolists.findOne);
  router.put("/:id", todolists.update);
  router.delete("/:id", todolists.delete);
  router.delete("/", todolists.deleteAll);
  app.use("/api/todolists", router);
};
