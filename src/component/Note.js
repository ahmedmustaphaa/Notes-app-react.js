import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { noteApi } from './Api';
import { Link } from 'react-router-dom';
import { TbSettingsSearch } from 'react-icons/tb';

function Note({notes,setNotes}) {
    const[isopen,setisopen]=useState(false);
    const[search,setsearch]=useState('')
    const noteshow = notes.filter((item) => 
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      const clearAll=()=>{
        setNotes([])
      }
  return (
    <div style={{padding:'20px'}}>
    <Link to='/createnote'><IoMdAddCircle className='plusicon' /></Link> 
    <button className="btn btn-outline-danger" id='btn' onClick={clearAll}>clear All</button>
    <div className='allnotes'>
    <h2>my notes</h2>
    {isopen?(<input placeholder='search' value={search} onChange={((e)=>setsearch(e.target.value))}></input>):(<FaSearch className='search' onClick={()=>setisopen(!isopen)}/>)}

    </div>
    <hr style={{color:'red'}}></hr>
    <div className='apinote'>
    <div className='devapi'>
    {noteshow.map((note)=>{
        return(
            <div className='noteitem'>
            <Link to={`/editnote/${note.id}`} id='link'><h3>{note.title}</h3></Link>
            <p>{note.desc.length>50?note.desc.substr(0,70):note.desc}</p>
            </div>
        )
    })}
    </div>
    </div>
    
    </div>
  )
}

export default Note