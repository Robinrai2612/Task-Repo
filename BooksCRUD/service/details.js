bookstore = [
  {
    id: "1",
    title: "Titanic",
    publisher: "Chota Robin",
    author: "Andy Muschietti",
    published: 2012,
  },
  {
    id: "2",
    title: "Pirahna",
    publisher: "Naughty Robin",
    author: "Virat Fernadiz",
    published: 2013,
  },
  {
    id: "3",
    title: "Avtaar",
    publisher: "Rai Robin",
    author: "Ab divilliers",
    published: 2016,
  },
];

book = {};

book.retrieveBooks = () => {
  return bookstore;
};

book.getBook = (bookid) => {
  for (let i = 0; i < bookstore.length; i++) {
    if (bookstore[i]["id"] == bookid) return bookstore[i];
  }
};

book.retrieveBooks = (bname) => {
  for (let i = 0; i < bookstore.length; i++) {
    if (bookstore[i]["title"].toLowerCase() == bname.toLowerCase())
      return bookstore[i];
  }
};

book.addBooks = (Book) => {
  if (Book) {
    let bookObj = JSON.parse(Book);
    bookstore.push(bookObj);
    console.log(bookstore);
    return true;
  } else return false;
};

book.multipleInsert = (Book) => {
  if (Book) {
    let bookObj = JSON.parse(Book);
    bookstore.push(bookObj);
    console.log(bookstore);
    return true;
  } else return false;
};

book.deleteBooks = (bookid) => {
  let index;
  if (bookid) {
    for (let i = 0; i < bookstore.length; i++) {
      if (bookstore[i]["id"].toLowerCase() == bookid.toLowerCase()) {
        index = i;
        break;
      }
    }
    bookstore.splice(index, 1);
    console.log(bookstore);
    return true;
  } else return false;
};

book.updateBooks = (bname, key, value) => {
  if (bname) {
    for (let i = 0; i < bookstore.length; i++) {
      if (bookstore[i]["title"].toLowerCase() == bname.toLowerCase()) {
        bookstore[key] = value;
        return true;
      }
    }
  } else return false;
};

module.exports = book;
