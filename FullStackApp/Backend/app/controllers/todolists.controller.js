const db = require("../models");
const Todolist = db.todolists;
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const todolist = new Todolist({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  });
  todolist
    .save(todolist)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Todolist.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Todolist.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Todolist.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Todolist with id=${id}. Maybe Todolist was not found!`,
        });
      } else res.send({ message: "Todolist was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Todolist.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Todolist with id=${id}. Maybe Todolist was not found!`,
        });
      } else {
        res.send({
          message: "Todolist was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Todolist with id=" + id,
      });
    });
};
exports.deleteAll = (req, res) => {
  Todolist.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Todolists were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    });
};

exports.findAllPublished = (req, res) => {
  Todolist.find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    });
};
