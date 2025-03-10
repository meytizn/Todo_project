// other components 






"use client"
import React, { useContext } from 'react'
import { BaseContext } from '../contextApi'
import Link from 'next/link'


export default function Parrent() {
  let data = useContext(BaseContext)

  return (
    <>



<div className='flex flex-col justify-center items-center w-[100%] h-[100px] text-center text-[20px] bg-slate-700 m-auto text-white'>
    <div className='w-[50%]'>
<form >
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
 
  {data.language.map(
    (la,index)=>(<option onClick={()=>data.languagehandler(la)} value={la.id}  key={index}>{la.title}</option>)
    )}
    {/* <option >Choose a country (EN) </option>
    <option >فارسی (Fa) </option> */}

  </select>
</form>
 </div>
      
    </div>

<br/>
<br/>
<br/>
<br/>

<div className={`px-10 ${data.targetlanguage.dir}`}>
<h1>{data.targetlanguage.description}</h1>
</div>

{/* <Link href="/multiLanguage/Child/">go</Link> */}

    </>
    
  )
}









    {/* <button onClick={()=>data.changehandler()}>change language</button> */}