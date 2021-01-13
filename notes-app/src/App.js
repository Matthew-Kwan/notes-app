import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import NoteForm from './components/NoteForm'
import noteService from './services/note'
import './App.css';

function App() {
  // States
  const [notes, setNotes] = useState([])

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

  return (
    <div className="App">
      <div>
        <h1>Notes</h1>
      </div>
      <div>
        {notes.map(note =>
         <Note key={note.id} note={note}/>
        )}
        <NoteForm key='1' createNote={addNote}/>
      </div>
    </div>
  );
}

export default App;
