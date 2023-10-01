//utils.promisify
const util = require('util');
const fs = require('fs');

const uuidV4 = require('uuid');


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
  let newNote = {  
      title,
      text,
      id: uuidV4(),// or note_id:uuidV4?
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
  

//defie a note -- destructing method

//what if there is 'no' text or title -- "throw new Error()"

//newNote = {title, text, uuid} define all properties in curly bracket

//Get all nots, add the new note, write all the updated notes, return the newNote

////return getNotes, 
//.then w/motes, newNotes
//.then updatedNotes =>   notes.filer...note => note.id !== id
//.then(() newNote) 
  


module.exports = new Store();