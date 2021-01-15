import React from 'react'
import '../App.css';

const Note = ({ note, updateNote }) => {

  const handleUpdate = (e) => {
    e.preventDefault()
    const value = e.target.value
    note.title = e.target.value
  }

  return (
    <div className='noteStyle'>
      <textarea className='noteTitle' value={note.title} onChange={handleUpdate}/>
      <textarea className='noteContent' value={note.content} onChange={handleUpdate}/>
      <textarea className='noteDate' value={note.date} onChange={handleUpdate}/>
    </div>
  )

}

export default Note