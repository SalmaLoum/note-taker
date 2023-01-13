//Loading Modules
const path = require('path')
const router = require('express').Router()

//Sends notes to the notes.html file
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//Sends to the homepage if there's an issue
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = noteTake
