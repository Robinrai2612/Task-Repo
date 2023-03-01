module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
// dbname: innovaptive
//collection name is notes

    /*
     {   "title": "java",
    "content": "Web prorgmaming lang",
    "city":"Hyd",
    "addres": {
         "street": "Madhapur",
         "city":"Hyd"
             }
             
 }
    */
    app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}