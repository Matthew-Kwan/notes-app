import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import NoteForm from './components/NoteForm'
import noteService from './services/note'
import './App.css';

function App() {
  // States
  const [notes, setNotes] = useState([])
  const [isFocused, setIsFocused] = useState(false)

  // Initial Setup Effects
  useEffect(() => {
    noteService.getAll().then(notes =>
      setNotes(notes)
    )
  }, [])

  // Event Handlers

  const addNote = (note) => {
    const noteObject = note

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
      })
  }

  const updateNote = (note) => {
    const noteObject = note

    noteService
      .update(noteObject, note.id)
      .then(returnedNote => {
          setNotes(notes.map(n => (n.id === returnedNote.id ? returnedNote : n)))
      })
  }

  const deleteNote = (note) => {

    if(window.confirm('Do you really want to delete this note?')) {
      noteService.deleteNote(note.id)
      .then(response => {
        noteService.getAll().then(noteList =>
          setNotes(noteList))
      })
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Notes</h1>
      </div>
      <div>
        {notes.map(note =>
         <Note key={note.id} note={note} updateNote={updateNote} deleteNote={deleteNote} isFocused={isFocused} setIsFocused={setIsFocused}/>
        )}
        <NoteForm key='1' createNote={addNote}/>
      </div>
    </div>
  );
}

export default App;
