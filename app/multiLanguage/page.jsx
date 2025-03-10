// importing structure func in
//main component above parrent



"use client"
import React from 'react'
import Parrent from './components/Parrent'
import { ContextProvider } from './contextApi'


export default function MultiLanguage() {
  
  return (
    <>

    <ContextProvider>


    <Parrent/> 

    </ContextProvider>

    

   
      </>
   
  )
}
