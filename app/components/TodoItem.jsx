"use client"
import React, { useState } from 'react'
import TodoDelete from './TodoDelete'
import TodoEdit from './TodoEdit'

export default function TodoItem({todo ,statushandler,deleteTodoFunc,changehandler}) {
  let [editmode , setEditMode]=useState(false)

  // methods
function editmode_keydown(event){

  if(event.key=="Enter"){
    // alert(event.target.value)
    changehandler(todo.uuid,event.target.value)
    setEditMode(false)
  }


}

  // end methods

  return (
    <>



{editmode 
? (<> 
 <input
    defaultValue={todo.title}
    onKeyDown={()=>editmode_keydown(event)}
    type="text"
    className=" bg-blue-400 text-white text-[20px] rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white "
  /></>)




:(<>
                <div key={todo.uuid} className="flex flex-row justify-between bg-white h-[40px] text-[20px] gap-3 items-center px-3 rounded-md">
              <div className={`text-left ${todo.status ? "line-through  " : ""}`}>

               <input checked={todo.status} type="checkbox" onChange={()=>{statushandler(todo.uuid)}} />     {todo.id} - {todo.title}
                
                </div>
              <div className="w-[25%] flex flex-row justify-between">
                <TodoEdit todo={todo} setEditMode={setEditMode}/>
                <TodoDelete todo={todo} deleteTodoFunc={deleteTodoFunc}/>
              </div>
            </div>
</>)}


    </>
  )
}
