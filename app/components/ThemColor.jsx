"use client"

import Image from 'next/image'
import { useState } from 'react'

export default function ThemColor() {

  const [color,setColor]=useState("")

  let onchangeHandler=(event)=>{
    setColor(event.target.value)
  }
  
  
  return (
   <>
  
<div className='flex flex-row w-[90%] m-auto justify-around'>

  <div><h3> welcome </h3></div>

  <div>
   <select onChange={onchangeHandler} >
    <option value="bg-red-500">red</option>
    <option value="bg-blue-500">blue</option>
    <option value="bg-pink-500">pink</option>
   </select>
   </div>



   </div>

   <div className={color=="bg-red-500" ? `text-white ${color} ` : "text-black"}>hii</div>
   </>
  )
}
