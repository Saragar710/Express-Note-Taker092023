const router = require('express').Router();
const path = require('path');

// "/notes" respondes with the notes.html file
router.get('/notes',(req,res) => 
    res.sendFile(path.join(_dirname, '/notes.html'))
);

// All other routes respond to the index.html file
router.get('*',(req,res) => 
    res.sendFile(path.join(_dirname, '/index.html'))
);

module.exports = router;