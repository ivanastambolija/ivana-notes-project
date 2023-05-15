import React from 'react'

export default function DeleteModal( {note, handleOnDeleteButton, handleOnCancelButton } ) {

    return(
      <div className='modalBackground'>
        <div className='delete-modal' >
          <h4>{`Are you sure you want to delete ${note.title}?`}</h4>
          <div className='delete-btn-container'>
            <button onClick={() => handleOnDeleteButton(note)}>Yes</button>
            <button onClick={handleOnCancelButton}>No</button>
          </div>
        </div>
      </div>
        
    )
}