import React, { useState } from 'react'
import uuid from 'react-uuid'
import DeleteModal from './Components/DeleteModal'
import NoteModal from './Components/NoteModal'
import ListOfNotes from './Components/ListOfNotes'


export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [notesList, setNotesList] = useState([])
  const [note, setNote] = useState({
    id:uuid(), 
    title:'', 
    content:''
  })
  const [deleteModal, setDeleteModal] = useState(false)
  const [selectedNote, setSelectedNote] = useState(null)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const openDeleteModal = () => {
    setSelectedNote(note)
    console.log(selectedNote)
    setDeleteModal(true)
  }

  const closeDeleteModal = () => {
    setDeleteModal(false)
  }

  const handleChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value
    })
  }

  const saveNote = (event) => {
    event.preventDefault();
    setNotesList([note, ...notesList])
    setNote({id:uuid(), title:'', content:''})
    closeModal()
  }

  const editNote = () => {
    openModal()
    setSelectedNote({note})
    console.log(selectedNote)
    closeModal()
  } 

  const deleteNote = (note) => {
    setSelectedNote({note})
    console.log(selectedNote)
    const newNotesList =  notesList.filter(note => note.id !== selectedNote.id)
    setNotesList(newNotesList)
    console.log('note deleted', newNotesList)
    setSelectedNote(null)
    closeDeleteModal()
	};

  return(
    <div className={notesList.length === 0 ? 'no-notes' : 'with-notes'}>
      {!showModal && (
        <div className='add-note-btn'>
          <button onClick={openModal}>Add Note</button>
        </div>)
      }
      {showModal && (
        <NoteModal 
          selectedNote={selectedNote}
          handleChange={handleChange} 
          note={note}
          saveNote={saveNote} 
          editNote={editNote}
          closeModal={closeModal}
        />)
      }
      <ListOfNotes 
        notesList={notesList} 
        editNote ={editNote} 
        openDeleteModal={openDeleteModal}
      />
      
      {deleteModal && (
        <DeleteModal 
          selectedNote={selectedNote} 
          deleteNote={deleteNote} 
          closeDeleteModal={closeDeleteModal} 
        />)
      }
    </div>
  )
}
