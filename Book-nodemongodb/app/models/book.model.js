const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    age: Number,
    published: Boolean,
    dateofpublishing: String,
    genre: String,
    author: String,
    addres: {
      street: String,
      city: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", BookSchema);
