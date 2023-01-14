//Dependencies
const express = require('express')
const api = require('./routes/api')
const html = require('./routes/html')
const { v4: uuidv4 } = require('uuid')

// Tells node that we are creating an "express" server
const app = express()

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3001

//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Calls public library
app.use(express.static('public'))

//Points our server to the route files
app.use('/api', api)
app.use('/', html)

//Starts the code
app.listen(PORT, () => {
  console.log(`Now listening on PORT: ${PORT}`)
})
