import React from 'react'

export default function TodoEdit({todo,setEditMode}) {
  return (
    <>
    <button onClick={()=>setEditMode(true)}>Edit</button>
    </>
  )
}
