import React, { useState } from 'react'
import uuid from 'react-uuid'

export default function NoteModal( {note, handleOnAddButton, handleOnEditButton, handleOnCancelButton }) {
  const [title, setTitle] = useState(note ? note.title : '')
  const [content, setContent] = useState(note ? note.content : '')

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }
  
  function handleContentChange(e) {
    setContent(e.target.value)
  }

  const saveChanges = (e) => {
    e.preventDefault()
    const newNote = {
      id: uuid(),
      title: title,
      content: content
    }

    handleOnAddButton(newNote)
  }

  const editChanges = (e) => {
    const newNote = {
      id: note.id,
      title: title,
      content: content
    }

    handleOnEditButton(newNote)
  }


  return(
    <div className='modalBackground'>
      <div className='note-modal'>
        <header>
          <h3>{note ? `Edit ${note.title}` : `Add Note`}</h3>
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
            {!note && (<button type='submit' onClick={saveChanges}>Save</button>)}
            {note && (<button type='submit' onClick={editChanges}>Edit</button>)}
            <button onClick={handleOnCancelButton}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}