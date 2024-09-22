import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';


const EditeNote = ({ notes, setNotes }) => {

    const {id}=useParams()

    const ahmed = notes.find((note) => note.id === id);

  
    
   
    const [title, settitle] = useState(ahmed.title);
    const [desc, setdesc] = useState(ahmed.desc);
  
    const navigate = useNavigate();
    const deleteItem=()=>{
        const del=notes.filter((item)=>item.id!==id);
        setNotes(del);
        navigate('/')
        
    }
  
    // Function to save the updated note
    const saveItem = () => {
      // Update the note in the array
      const updatedNotes = notes.map((item) => 
        item.id === id ? { ...item, title, desc } : item
      );
  
      // Update the state with the new notes array
      setNotes(updatedNotes);
  
      // Navigate to the home page
      navigate('/');
    };
  return (
    <div>
    <div className='allnotes'>
    <h2>my notes</h2>
   <button className='btn btn-info' onClick={saveItem}>save</button>
   <MdDelete className='fss' onClick={deleteItem}/>
    </div>
    <div className='createitem'>
    <input value={title} onChange={((e)=>settitle(e.target.value))} className='additem' placeholder='title'></input>
    <input value={desc} onChange={((e)=>setdesc(e.target.value))} className='additem' placeholder='descriptio'></input>
    </div>
    </div>
  )
}

export default EditeNote