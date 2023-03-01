const Book = require("../models/book.model.js");

// Create and Save a new Note
exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Book content can not be empty",
    });
  }

  // Create a Note
  const book = new Book({
    title: req.body.title || "Untitled Note",
    content: req.body.content,
    city: req.body.city,
  });

  // Save Note in the database
  note
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book.",
      });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  Book.find()
    .then((books) => {
      res.send(books);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books.",
      });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
  Book.findById(req.params.bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: "Book not found with id " + req.params.bookId,
        });
      }
      res.send(book);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Book not found with id " + req.params.bookId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving note with id " + req.params.bookId,
      });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Book content can not be empty",
    });
  }

  // Find note and update it with the request body
  Book.findByIdAndUpdate(
    req.params.bookId,
    {
      title: req.body.title || "Untitled Book",
      content: req.body.content,
    },
    { new: true }
  )
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: "Book not found with id " + req.params.bookId,
        });
      }
      res.send(book);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Book not found with id " + req.params.bookId,
        });
      }
      return res.status(500).send({
        message: "Book updating note with id " + req.params.bookId,
      });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
  Book.findByIdAndRemove(req.params.bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).send({
          message: "Book not found with id " + req.params.bookId,
        });
      }
      res.send({ message: "Book deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Book not found with id " + req.params.bookId,
        });
      }
      return res.status(500).send({
        message: "Could not delete note with id " + req.params.bookId,
      });
    });
};
