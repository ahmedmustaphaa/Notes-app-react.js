import { Route, Routes } from 'react-router-dom'; // Use 'react-router-dom' instead of 'react-router'
import './App.css';
import Note from './component/Note.js';
import EditeNote from './component/EditeNote.js';
import Createnode from './component/Createnode.js'; // Ensure correct naming
import { useState, useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState(() => {
    // Load notes from local storage or initialize as an empty array
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Save notes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (  
    <div className='contain'>
      <div className="containe-item">
        <Routes>
          <Route path='/' element={<Note notes={notes}  setNotes={setNotes} />} />
          <Route path='/editnote/:id' element={<EditeNote notes={notes} setNotes={setNotes} />} />
          <Route path='/createnote' element={<Createnode notes={notes} setNotes={setNotes} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;