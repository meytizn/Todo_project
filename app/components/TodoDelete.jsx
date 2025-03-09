import React from 'react'

export default function TodoDelete({todo,deleteTodoFunc}) {
  return (
    <>
    <button onClick={()=>{deleteTodoFunc(todo.uuid)}} >Delete</button>
    </>
  )
}
