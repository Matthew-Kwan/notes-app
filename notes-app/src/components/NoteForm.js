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

  const addNote = () => {
    createNote(newNote)
    setNewNote({
      title: '',
      content: ''
    })

  }

  const handleFocus = (e) => {
    e.preventDefault()
  }

  const handleBlur = (e) => {
    e.preventDefault()
    addNote()
  }


  return (
    <div onFocus={handleFocus} onBlur={handleBlur} >
      <form className="noteForm" onSubmit={addNote}>
        <textarea
          wrap="soft"
          className="noteTitleInput"
          type="text"
          name="title"
          value={newNote.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          wrap="soft"
          className="noteContentInput"
          type="text"
          name="content"
          value={newNote.content}
          placeholder="Type here..."
          onChange={handleChange}
        />
        <input type="submit" className="submitInput"/>
      </form>
    </div>
  )
}
export default NoteForm