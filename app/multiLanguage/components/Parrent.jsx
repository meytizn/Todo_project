// other components 






"use client"
import React, { useContext } from 'react'
import { BaseContext } from '../contextApi'


export default function Parrent() {
  let data = useContext(BaseContext)

  return (
    <>
      <div>{data.isLogin
       ? ("welcome")
       :("get out ")} </div>
    </>
    
  )
}









    {/* <button onClick={()=>data.changehandler()}>change language</button> */}