import React from "react";
import uuid from 'react-uuid'

export default function NoteModal( { selectedNote, setSelectedNote, notes, setNotes, closeModal, title, setTitle, content, setContent, handleTitleChange, handleContentChange }) {
  
  const saveChanges = (e) => {
    e.preventDefault()
    if(selectedNote) {
      const editedNote = {...selectedNote, title, content}
      console.log(editedNote)
      const editedNotesArray = notes.map((note) => {
        if(note.id === selectedNote.id) {
          note = editedNote
        }
        return note
      })
      setNotes(editedNotesArray)
      setTitle('')
      setContent('')
      setSelectedNote(null)
    } else {
      e.preventDefault()
      const newNote = {
        id: uuid(),
        title: title,
        content: content
      }
      setNotes(prevNotes => [newNote, ...prevNotes])
      setTitle('')
      setContent('')
    } 
    closeModal()
  }

  return(
    <div className='modalBackground'>
      <div className='note-modal'>
        <header>
          <h3>{selectedNote ? `Edit ${selectedNote.title}` : `Add Note`}</h3>
        </header>
        <form>
          <input 
            type='text'
            placeholder='title...'
            name='title'
            value={title}
            onChange={handleTitleChange}
          >
          </input>
          <textarea 
            placeholder='your note goes here...'
            name='content'
            value={content}
            onChange={handleContentChange}
          >
          </textarea>
          <div className='btn-container'>
            <button type='submit' onClick={saveChanges}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}