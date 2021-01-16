import React, { useState } from 'react'
import '../App.css';

const Note = ({ note, updateNote , deleteNote}) => {

  // Create a note state
  const [newNote, setNewNote] = useState(note)


  const handleUpdate = (note) => {
    updateNote(note)
  }

  const handleChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    setNewNote({
      ...newNote,
      [e.target.name]: value
    })
  }

  const handleFocus = (e) => {
    e.preventDefault()
    console.log('Focused on input')
  }

  const handleBlur = (e) => {
    e.preventDefault()
    handleUpdate(newNote)
  }

  return (
    <div className='noteStyle' onFocus={handleFocus} onBlur={handleBlur}>
      <textarea className='noteTitle' name='title' value={newNote.title} onChange={handleChange}/>
      <textarea className='noteContent' name='content' value={newNote.content} onChange={handleChange}/>
      <p className='noteDate'>{note.date}</p>
    </div>
  )
}

export default Note