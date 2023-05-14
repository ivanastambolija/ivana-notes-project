import React from 'react'

export default function DeleteModal( {selectedNote, deleteNote, closeDeleteModal } ) {

    return(
      <div className='modalBackground'>
        <div className='delete-modal' >
          <h4>{`Are you sure you want to delete ${selectedNote.title}?`}</h4>
          <div className='delete-btn-container'>
            <button onClick={() => deleteNote(selectedNote)}>Yes</button>
            <button onClick={closeDeleteModal}>No</button>
          </div>
        </div>
      </div>
        
    )
}