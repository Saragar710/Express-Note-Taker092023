//utils.promisify
const util = require('util');
const fs = require('fs');

const uuidV4 = require('uuid');
const { deepStrictEqual } = require('assert');

const readFileDisplay = util.promisify(fs.readFile);
const writeFileDisplay = util.promisify(fs.writeFile);



// async function callStat() {
//   const stats = await stat('.');
//   console.log(`This directory is owned by ${stats.uid}`);
// }

class Store {
  read() {
    return readFileDisplay('db/db.json', 'utf8');
  }

  write(note) {
    return writeFileDisplay('db/db.json', JSON.stringify(note));
  }

  getNotes(){
    return this.read().then((notes) => {
      let diplayNotes;

      //If notes isnt an array or cant be turned into one, send back an empty array
      try {
        diplayNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        diplayNotes = [];
      } 
      return diplayNotes
    });

  addNote(note){
//defie a note -- destructing method

//what if there is 'no' text or title -- "throw new Error()"

//newNote = {}

//Get all nots, add the new note, write all the updated notes, return the newNote

////return getNotes, 
//.then w/motes, newNotes
//.then updatedNotes =>   notes.filer...note => note.id !== id
//.then(() newNote) 
  }
   
  }




}


module.exports = new Store();