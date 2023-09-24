const router = require('express').Router();
const store = require('../db/store');

 // GET "/api/notes" respondes with all notes from the file
 router.get('/notes',  (req,res) => {
    store
    .getNotes()
    .then((notes) => {
       return res.json(notes) 
    })
    .catch((err) => res.status(500).json(err))

 })

 // POST  "/api/notes" respondes with all notes from the file
 router.post('/notes',  (req,res) => {
    store
    .addNote(req.body)
    .then((notes) => {
        return (newNotes)
    })//finish
    .catch((err) => res.status(500).json(err))
    
 })











module.exports = router;