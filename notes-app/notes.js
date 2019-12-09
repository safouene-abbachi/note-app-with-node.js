const fs = require("fs");

let fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("note.txt"));
  } catch (err) {
    return [];
  }
};

let addingNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  notes.push(note);
  fs.writeFileSync("note.txt", JSON.stringify(notes));
};

let removeNote = title => {
  var notes = fetchNotes();

  let filtredNote = notes.filter(note => note.title !== title);
  fs.writeFileSync("note.txt", JSON.stringify(filtredNote));
};

let readNote = title => {
  var notes = fetchNotes();
  let filtredNote = notes.filter(note => note.title === title);
  console.log(filtredNote);
};

let getAll = () => {
  var notes = fetchNotes();
  console.log(notes);
};

module.exports = { addingNote, removeNote, readNote, getAll };
