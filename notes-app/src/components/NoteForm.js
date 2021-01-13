import React, {useState } from 'react'
import '../App.css';

const NoteForm = ({ createNote }) => {

  // new Note state
  const [newNote, setNewNote] = useState({
    title: '',
    content: ''
  })

  // event handler

  const handleChange = (e) =>{
    e.preventDefault()
    const value = e.target.value
    setNewNote({
      ...newNote,
      [e.target.name]: value
    })
  }

  const addNote = (e) => {
    e.preventDefault()
    createNote(newNote)
    setNewNote({
      title: '',
      content: ''
    })

  }


  return (
    <div>
      <form className="noteForm" onSubmit={addNote}>
        <input
          className="noteTitleInput"
          type="text"
          name="title"
          value={newNote.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          className="noteContentInput"
          type="text"
          name="content"
          value={newNote.content}
          placeholder="Type your note here..."
          onChange={handleChange}
        />
        <input type="submit" className="submitInput"/>
      </form>
    </div>
  )
}
export default NoteForm