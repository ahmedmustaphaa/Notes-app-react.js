import React, { useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Createnode({notes,setNotes}) {
    const[title,settitle]=useState('');
    const[desc,setdesc]=useState('');
    const navigate=useNavigate()
    const createNote=()=>{
        setNotes([...notes,{title,desc,id:uuidv4()}]);
        navigate('/')
            
    }
  return (
    <div className='createnode'>
    <div className='allnotes'>
  <Link to='/'>  <IoMdArrowRoundBack className='search'/></Link>
    <button className='btn btn-info' onClick={createNote}>save</button>
    </div>
    <div className='createitem'>
    <input value={title} onChange={((e)=>settitle(e.target.value))} className='additem' placeholder='title'></input>
    <input value={desc} onChange={((e)=>setdesc(e.target.value))} className='additem' placeholder='descriptio'></input>
    </div>
    </div>
  )
}

export default Createnode