import React, { useState} from 'react'
import '../App.css';

const Note = ({ note, updateNote , deleteNote, isFocused, setIsFocused }) => {

  // Create a note state
  const [newNote, setNewNote] = useState(note)
  const [interval, setInterval] = useState(null)
  const [changeCount, setChangeCount] = useState(0)

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
    setChangeCount(changeCount + 1)

    if (changeCount % 5 === 0) {
      handleUpdate(newNote)
    }
  }

  const handleFocus = (e) => {
    e.preventDefault()
  }

  const handleBlur = (e) => {
    e.preventDefault()
    handleUpdate(newNote)
  }

  function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
  }

  const showDate = () => {
    const castedDate = new Date(note.date)
    return `Last Updated: ${castedDate.getFullYear()}-${castedDate.getMonth()+1}-${castedDate.getDate()} ${castedDate.getHours()}:${castedDate.getMinutes()}:${castedDate.getSeconds()}`

  }

  return (
    <div className='noteStyle' onFocus={handleFocus} onBlur={handleBlur}>
      <textarea wrap="soft" className='noteTitle' name='title' value={newNote.title} onChange={handleChange}/>
      <textarea placeholder="Type your note here..." wrap="soft" className='noteContent' name='content' value={newNote.content} onChange={handleChange}/>
      <p className='noteDate'>{showDate()} <button onClick={() => handleDelete(note)}>Delete</button></p>
    </div>
  )
}

export default Note