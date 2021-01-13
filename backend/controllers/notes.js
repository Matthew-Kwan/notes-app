const notesRouter = require('express').Router()
const Note = require('../models/notes')

// HTTP GET ALL REQUEST
notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({})
  response.json(notes)
})

// HTTP GET ID REQUEST
notesRouter.get('/:id', async (request, response) => {

  const note = notes.findById(request.params.id)
  response.json(note)

})

// HTTP POST REQUEST
notesRouter.post('/', async (request, response) => {
  const body = request.body

  const note = new Note({
    title: body.title,
    content: body.content,
    date: new Date()
  })

  const savedNote = await note.save()
  response.status(201).json(savedNote)
})

module.exports = notesRouter