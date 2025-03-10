

"use client"
import { createContext, useState } from 'react'



//base
export let BaseContext=createContext()




// /structure for imports in main component
export function ContextProvider({children}) {
 
 

  let [language , setLanguage]=useState([
    {id:1,title : "English (EA)" , description :"welcome to this website , as you see we are using multilanguage in this app ",dir:"text-left",message:"you Language is English "},
    {id:2,title : "فارسی (FA)" , description :"به این وب سایت خوش امدید و همانطور که میبینید ما از چندین زبان برای این اپ استفاده میکنیم  ",dir:"text-right",message:"زبان شما فارسی است  "}
  ])

 

  let [targetlanguage,setTargetLanguage] = useState(language[0])



  function languagehandler(obj){
    setTargetLanguage(obj)
  }


  // let isLogin = true

  let data = {language ,setLanguage,languagehandler,targetlanguage}

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
