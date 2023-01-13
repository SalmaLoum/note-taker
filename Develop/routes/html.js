//Loading Modules
const path = require('path')
const noteTake = require('express').Router()

//Sends notes to the notes.html file
noteTake.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//Sends to the homepage if there's an issue
noteTake.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = noteTake
