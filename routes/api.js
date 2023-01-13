const router = require('express').Router()
const store = require('../db/store')

router.get('/notes', (req, res) => {
  store.getNotes().then((response) => {
    return res.json(response)
  })
})

router.post('/notes', (req, res) => {
  store.addNotes(req.body).then((response) => {
    return res.json(response)
  })
})

module.exports = router
