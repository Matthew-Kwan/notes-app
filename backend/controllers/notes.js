const notesRouter = require('express').Router()
const Note = require('../models/notes')

// HTTP GET ALL REQUEST
notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({})
  response.json(notes)
})

// HTTP POST REQUEST