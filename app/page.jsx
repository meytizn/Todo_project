"use client"
import { useState } from "react"




export default function Home() {

  let [todos,setTodos]=useState([
    {id:1,title:"gym", status:true},
    {id:2,title:"homework", status:false},
    {id:3,title:"playstation", status:true},
  ]) 

  let [id,setID] = useState(todos.length+1)


  

  function addhandler(){
    let input = document.getElementById("inputtodo")
    let inputvalue = input.value
   
    let newobj={id:id,title:inputvalue,status:false}
    setTodos([...todos,newobj])

    input.value=""
    setID(id+1)
  }


  return (
   <>
   
<div className="w-[100%] md:w-[50%] bg-red-400 m-auto flex flex-col items-center   md:my-20 md:rounded-lg">


<div  className="w-[90%] my-5 ">
<input placeholder="text somthing to do .... "  id="inputtodo" type="text"  class="bg-gray-50   text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white  "/>
</div>


<button onClick={addhandler} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[20%] h-[50px]">add</button>


{/* <div><h3>tasks</h3></div> */}






<div className="w-[90%] my-5 text-left flex flex-col gap-y-5">
  {todos.map((todo,index)=>(<>
  <div className="flex flex-row justify-between bg-green-300 h-[40px] text-[20px] gap-3 items-center px-3 rounded-md" >
    <div className="text-left" key={index}>{todo.id} - {todo.title} </div>
    <div> </div>
     <div  className=" w-[25%] flex flex-row justify-between  " ><div>edit</div> <div>delete</div> <div></div> </div>
  
  </div>
  
  </>))}
</div>
</div>


    </>
  )
}
