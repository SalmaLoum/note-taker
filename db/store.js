const util = require('util')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const { notStrictEqual } = require('assert')

const readFromFile = util.promisify(fs.readFile)
const writeFromFile = util.promisify(fs.writeFile)

//Reading file
class Store {
  readFile() {
    return readFromFile('db/db.json', 'utf8')
  }
  //writing file to data
  writeFile(data) {
    return writeFromFile('db/db.json', JSON.stringify(data))
  }
  //get notes will use the info from readFile and turn it into an array
  getNotes() {
    return this.readFile().then((response) => {
      var parseNotes = []
      // if we're able to concat these two files the response once parse becomes an array.
      if ([].concat(JSON.parse(response))) {
        parseNotes = [].concat(JSON.parse(response))
      } else {
        parseNotes = []
      }
      return parseNotes
    })
  }

  //adding notes with title, text and a unique user id
  addNotes(data) {
    const newNote = {
      title: data.title,
      text: data.text,
      id: uuidv4(),
    }
    //adding the data to the json file, and pushing each item into my array
    return this.getNotes()
      .then((response) => [...response, newNote])
      .then((updatedNotes) => {
        this.writeFile(updatedNotes)
      })
      .then(() => newNote)
  }
}
module.exports = new Store()
