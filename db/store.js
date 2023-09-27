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
      let {title, text, uuid} = req.body

      if (req.body) {
        let newNotes = {  
          title,
          text,
          uuid_id: uuidV4(),// or note_id:uuidV4?
        };
        try {
          newNotes = (!title, text, uuid).concat(JSON.parse(newNotes));
    
        } catch  (err){
          throw newError("An error has occured, check your code!")
        }
  }
        writeAndAppend(newNotes, 'db/db.json');
        return this.getNotes()
        .then(note, newNotes),
        .then(updateNotes => {
        note.filter(note)
          note.id ==! id
    })
      }.then((), newNote)

    };
  
  

addNote(note){
  let {title, text, uuid} = req.body;
  if (req.body) {
    title,
    text,
    uuid_id: uuidV4(),
  }
  
  write.then(note)
}
//}
//     addNote(note){
//       let {title, text, uuidV4} = req.body;

//         let newNote = {
//           title,
//           text,
//           uuid_id: uuidV4(),

//           try {
//             newNote = [].concat(JSON.parse(newNote)),
//         } catch (err) {
//           throw newError("An error has occured... Check code!")
//         }
//         return getNotes 
//       }
//     }

//    }

//  }


  // addNote(note){
  //   let  {title, text, uuidV4} = req.body;
  //    try

  //       newNote = {
  //         title,
  //         text,
  //         uuid, 
  //       }
  //       try {
  //         newNote = 
  //     } catch (err) {
  //       throw new Error("An error has occured...")
  //     }
  //     return getNotes
  //     .then(notes, newNote)
  //     .then(writeFileDisplay)
  //     .then(updatedNotes, notes.filter)
  //     return updatedNotes =>
  //     ,then(() => 
  //     return newNote
  //     );

  // addNote =(note) => {
  //   let newNote = {
  //     title,
  //     text,
  //     uuid,
  //   };

  //   return this.getNotes()
  //   .then(notes => {
  //     notes.push(newNote);
  //     return notes;
  //   })
    
  // }


//defie a note -- destructing method

//what if there is 'no' text or title -- "throw new Error()"

//newNote = {title, text, uuid} define all properties in curly bracket

//Get all nots, add the new note, write all the updated notes, return the newNote

////return getNotes, 
//.then w/motes, newNotes
//.then updatedNotes =>   notes.filer...note => note.id !== id
//.then(() newNote) 
  




//}


module.exports = new Store();