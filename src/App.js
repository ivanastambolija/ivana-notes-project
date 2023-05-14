import React, { useState, useEffect } from 'react';
//import DeleteModal from './Components/DeleteModal';
import NoteModal from './Components/NoteModal';
import ListOfNotes from './Components/ListOfNotes';


export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [deleteModal, setDeleteModal] = useState(false)
  const [selectedNote, setSelectedNote] = useState(null)

  useEffect(() => {
     localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }

  function handleContentChange(e) {
    setContent(e.target.value)
  }

  const editNote = (note) => {
    setSelectedNote(note)
    openModal()
  }

  const openDeleteModal = (note) => {
    setDeleteModal(true)
    setSelectedNote(note)
  }

  const closeDeleteModal = () => {
    setDeleteModal(false)
  }

  const deleteNote = (selectedNote) => {
    const newNotesList =  notes.filter(note => note.id !== selectedNote.id)
    setNotes(newNotesList)
    setSelectedNote(null)
    closeDeleteModal()
	};

  return(
    <div className={notes.length === 0 ? 'no-notes' : 'with-notes'}>
      {!showModal && (
        <div className='add-note-btn'>
          <button id='add-btn' onClick={openModal}>Add Note</button>
        </div>)
      }
      {showModal && (
        <NoteModal 
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          notes={notes}
          setNotes={setNotes}
          handleTitleChange={handleTitleChange}
          handleContentChange={handleContentChange}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          closeModal={closeModal}
        />)
      }
      <ListOfNotes 
        notes={notes} 
        editNote={editNote}
        openDeleteModal={openDeleteModal}
      />
      {/* {deleteModal && (
        // <DeleteModal 
        //   selectedNote={selectedNote}
        //   deleteNote={deleteNote} 
        //   closeDeleteModal={closeDeleteModal}
        // />)
      } */}
    </div>
  )
}
