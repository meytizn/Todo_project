import React from 'react'
import TodoItem from './TodoItem'



export default function TodoList({todos ,statushandler,deleteTodoFunc}) {
  return (
    <>
              {todos.map((todo) => (

              <TodoItem todo={todo} statushandler={statushandler} deleteTodoFunc={deleteTodoFunc} />

            // <div key={todo.uuid} className="flex flex-row justify-between bg-green-300 h-[40px] text-[20px] gap-3 items-center px-3 rounded-md">
            //   <div className={`text-left ${todo.status ? "line-through  " : ""}`}>

            //    <input checked={todo.status} type="checkbox" onChange={()=>{statushandler(todo.uuid)}} />     {todo.id} - {todo.title}
                
            //     </div>
            //   <div className="w-[25%] flex flex-row justify-between">
            //     <div>Edit</div>
            //     <div>Delete</div>
            //   </div>
            // </div>

            
          ))}
    </>
  )
}
