import React, { useState } from 'react'
import '../App.css';

const Note = ({ note, updateNote , deleteNote }) => {

  // Create a note state
  const [newNote, setNewNote] = useState(note)
  const [interval, setInterval] = useState(null)


  const handleUpdate = (note) => {
    updateNote(note)
  }

  const handleDelete = (note) => {
    deleteNote(note)
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
    setInterval(window.setInterval(() => {
      handleUpdate(newNote)
    }, 3000))
  }

  const handleBlur = (e) => {
    e.preventDefault()
    clearInterval(interval)
    handleUpdate(newNote)
  }

  const showDate = () => {
    const castedDate = new Date(note.date)
    return castedDate.toUTCString()

  }

  return (
    <div className='noteStyle' onFocus={handleFocus} onBlur={handleBlur}>
      <textarea wrap="soft" className='noteTitle' name='title' value={newNote.title} onChange={handleChange}/>
      <textarea wrap="soft" className='noteContent' name='content' value={newNote.content} onChange={handleChange}/>
      <p className='noteDate'>{showDate()} <button onClick={() => handleDelete(note)}>Delete</button></p>
    </div>
  )
}

export default Note