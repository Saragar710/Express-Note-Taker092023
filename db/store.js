//utils.promisify
const util = require('util');
const fs = require('fs');

//const { v4: uuid4 } = require('uuid');

const uuidV1 = require('uuid/v1');

const readFileDisplay = util.promisify(fs.readFile);
const writeFileDisplay = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileDisplay('db/db.json', 'utf8');
  }

  write(note) {
    return writeFileDisplay('db/db.json', JSON.stringify(note));
  }

  getNotes(){
    return this.read().then((notes) => {
      let displayNotes;

      //If notes isnt an array or cant be turned into one, send back an empty array
      try {
        displayNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        displayNotes = [];
      } 
      return displayNotes
    });
  }

    addNote(note) 
    {
      let {title, text} = note

      if (!title || !text) {
        throw new Error("No title or text. Please enter a title and a text.")
        
  }
  let newNote = { title, text, id: uuidV1(),
     };
     // defined original note, put conditional for no notes, defined a new note.
     //ready to return

       // writeAndAppend(newNote, 'db/db.json');
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote)

    };
}
  

module.exports = new Store();