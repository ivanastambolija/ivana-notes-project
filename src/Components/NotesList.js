import React from "react";

export default function NotesList({ notes, handleOnEditButton, handleOnDeleteButton }) {
    return(
        <ul className='notes-list' >
        {notes.map((note) => {
          return (
            <li key={note.id}>
              <div className='note'>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <div className='btn-container'>
                  <button onClick={() => handleOnEditButton(note)}>Edit</button>
                  <button onClick={() => handleOnDeleteButton(note)}>Delete</button>
                </div>
              </div>
            </li>
          )}  
        )}
      </ul>
    )
}