import React from 'react'
import '../App.css';

const Note = ({ note }) => {

  return (
    <div className='noteStyle'>
      <p className='noteTitle'> {note.title} </p>
      <p className='noteContent'>{note.content}</p>
      <p className='noteDate'>{note.date}</p>
    </div>
  )

}

export default Note