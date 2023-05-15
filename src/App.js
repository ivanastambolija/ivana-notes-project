import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid'
import DeleteModal from './Components/DeleteModal';
import NoteModal from './Components/NoteModal';
import NotesList from './Components/NotesList';


export default function App() {
  const [showNoteModal, setShowNoteModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [selectedNote, setSelectedNote] = useState(null)

  useEffect(() => {
     localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const openNoteModal = () => {
    setShowNoteModal(true)
  }

  const closeNoteModal = () => {
    setShowNoteModal(false)
    setSelectedNote(null)
  }

  const openDeleteModal = () => {
    setShowDeleteModal(true)
  }

  const closeDeleteModal = () => {
    setShowDeleteModal(false)
    setSelectedNote(null)
  }

  const addNewNote = () => {
    setSelectedNote(null)
    openNoteModal()
  }

  const editNote = (note) => {
    setSelectedNote(note)
    openNoteModal()
  }

  const deleteNote = (note) => {
    setSelectedNote(note)
    openDeleteModal()
	};

  const addNewNoteButtonAction = (newNote) => {
    setNotes(prevNotes => [newNote, ...prevNotes])
    closeNoteModal()
	};

  const editExistingNoteButtonAction = (existingNote) => {
    const editedNotesList = notes.map((note) => {
      if(note.id === existingNote.id) {
        note = existingNote
      }
      return note
    })

    setNotes(editedNotesList)
    closeNoteModal()
	};

  const cancelNoteButtonAction = () => {
    closeNoteModal()
	};

  const deleteExistingNoteButtonAction = (existingNote) => {
    const editedNotesList = notes.filter((note) => {
      if(note.id === existingNote.id) {
        return false
      }
      return true
    })

    setNotes(editedNotesList)
    closeDeleteModal()
	};

  const cancelNoteDeleteButtonAction = () => {
    closeDeleteModal()
	};

  return(
    <div className={notes.length === 0 ? 'no-notes' : 'with-notes'}>
      {!showNoteModal && (
        <div className='add-note-btn'>
          <button id='add-btn' onClick={addNewNote}>Add Note</button>
        </div>)
      }
      {showNoteModal && (
        <NoteModal 
          note={selectedNote}
          handleOnAddButton={addNewNoteButtonAction}
          handleOnEditButton={editExistingNoteButtonAction}
          handleOnCancelButton={cancelNoteButtonAction}
        />)
      }
      {!showNoteModal && notes.length && (
        <NotesList 
          notes={notes} 
          handleOnEditButton={editNote}
          handleOnDeleteButton={deleteNote}
        />
      )}
      {showDeleteModal && (
         <DeleteModal 
           note={selectedNote}
           handleOnDeleteButton={deleteExistingNoteButtonAction} 
           handleOnCancelButton={cancelNoteDeleteButtonAction}
        />)
      }
    </div>
  )
}
