"use client"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./components/TodoList";



export default function Home() {



  let [todos,setTodos]=useState([
    {uuid:uuidv4(),id:1,title:"gym", status:true},
    {uuid:uuidv4(),id:2,title:"homework", status:false},
    {uuid:uuidv4(),id:3,title:"playstation", status:true},
  ]) 

  let [id,setID] = useState(todos.length+1)


  
  

  // methods


  function addhandler(){
    setID(id+1)
    let input = document.getElementById("inputtodo")
    let inputvalue = input.value

    if(inputvalue==""){
      alert("you cant leave the blank empty ")
    }
    else{
      let newobj={uuid:uuidv4(),id:id,title:inputvalue,status:false}
      setTodos([...todos,newobj])
  
      input.value=""
    }

    
  }



  function addtodo(event){
    
    if(event.key=="Enter"){
      if(event.target.value == ""){
        alert("you cant leave the blank empty ")
      }
      else{
        setID(id+1)
        let newobj={uuid:uuidv4(),id:id,title:event.target.value,status:false}
        
        setTodos([...todos,newobj])
        event.target.value=""
        
      }

    }
  }


  function statushandler(todouuid){
    let updatedtodo= todos.map(
      (todo)=>{
      if (todo.uuid==todouuid) {
        todo.status=!todo.status
        return todo
      }
      return todo
    }
  )

    setTodos(updatedtodo)

  }





function deleteTodoFunc(todouuid){
    // alert(todouuid)
    let todos_overiting = todos.filter(
      (todo)=>{
        return todo.uuid != todouuid
      }   
    )
    setTodos(todos_overiting)
  }



// end methods


  return (
   <>

      <div className="w-full md:w-1/2 bg-red-400 m-auto flex flex-col items-center md:my-20 md:rounded-lg">
        <div className="w-[90%] my-5">
          <input
          onKeyDown={()=>addtodo(event)}
            placeholder="Type something to do..."
            id="inputtodo"
            type="text"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
          />
        </div>

        <button
          onClick={addhandler}
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[20%] h-[50px]"
        >
          Add
        </button>






        <div className="w-[90%] my-5 text-left flex flex-col gap-y-5">

          <TodoList todos={todos} statushandler={statushandler} deleteTodoFunc={deleteTodoFunc}/>

        </div>
      </div>
    </>
  )
}
