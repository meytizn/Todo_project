

"use client"
import { createContext, useState } from 'react'



//base
export let BaseContext=createContext()




// /structure for imports in main component
export function ContextProvider({children}) {

  let isLogin = true

  let data = {isLogin}

  return (
    <BaseContext.Provider value={data}>
      {children}
    </BaseContext.Provider>
    
  )
}











// let [language,setLanguage]= useState(false)
  
// function changehandler(){
//   setLanguage(!language)
//   if(language==true){
//     alert("فارسی")
//   }
//   alert("English ")
// }




// let data = {language,setLanguage , changehandler}
