'use client'
import { useState } from 'react'



export default function Example({arr,setArr,id}) {
 

  function handleTitle(e){
    const newTitle=e.target.value;
    const newArr=[...arr]
      newArr[id].title=newTitle
      setArr(newArr);
  }
  function handleDesc(e){
 const newDes=e.target.value;
    const newArr=[...arr]
      newArr[id].content=newDes
      setArr(newArr);
  }
   


 

  return (
    <div>
      <div className='p-4 flex flex-col  gap-2'>
      <input value={arr[id].title}  onChange={handleTitle} name='tags' type="text" placeholder="Description Title...." className="min-w-[100px] p-2 border border-gray-300 rounded mb-4" />
     <textarea value={arr[id].content} onChange={handleDesc} placeholder='Description...'  className='textarea textarea-lg w-full'/>
     </div>
    </div>
  )
}