import React from "react";

export default function NoteModal( {selectedNote, handleChange, note, saveNote, closeModal }) {

    return(
      <div className='modalBackground'>
        <div className='note-modal'>
          <header>
            <h3>{selectedNote ? `Edit "${note.title}"` : 'Add Note'}</h3>
          </header>
          <form>
            <input 
              type='text'
              placeholder='title'
              name='title'
              onChange={handleChange}
              value={note.title}
            >
            </input>
            <textarea 
              placeholder='your note goes here'
              name='content'
              onChange={handleChange}
              value={note.content}
            >
            </textarea>
            <div className='btn-container'>
              <button onClick={saveNote}>{selectedNote ? `Edit` : 'Save'}</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
}