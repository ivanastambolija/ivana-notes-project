// import React from 'react'
// import { useState } from 'react'

// export default function EditNoteModal({ note, editNote, closeEditModal }) {
//     console.log(note)
//     const [title, setTitle] = useState(note.title)
//     const [content, setContent] = useState(note.content)

//     return (
//         <div className='modalBackground'>
//             <div className='note-modal'>
//                 <header>
//                     <h3>Edit </h3>
//                 </header>
//                 <form>
//                     <input 
//                         type='text'
//                         placeholder='title...'
//                         name='title'
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     >
//                     </input>
//                     <textarea 
//                         placeholder='your note goes here...'
//                         name='content'
//                         value={content}
//                         onChange={(e) => setContent(e.target.value)}
//                     >
//                     </textarea>
//                     <div className='btn-container'>
//                         <button onClick={editNote}>Save</button>
//                         <button onClick={closeEditModal}>Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// onClick={saveNote}