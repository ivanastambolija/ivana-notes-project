import React from "react";
export default function NotesList({ notesList, selectedNote, editNote, openDeleteModal}) {

    return(
        <ul className='notes-list' >
        {notesList.map((note) => {
          return (
            <li key={note.id}>
              <div className='note'>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <div className='btn-container'>
                  <button onClick={editNote}>Edit</button>
                  <button onClick={() => openDeleteModal(selectedNote)}>Delete</button>
                </div>
              </div>
            </li>
          )}  
        )}
      </ul>
    )
}