const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    city:String,
    addres: {
         street: String,
         city:String ,
         


    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);