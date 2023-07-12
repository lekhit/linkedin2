'use client'
import { useState } from 'react'



export default function Example({arr,setArr,id}) {
 const [value,setValue]=useState('');

function handleKeyDown(e){
  if(e.key==='Enter' && e.target.value!==''){
    const newTags=[...arr[id].points,value]
    const newArr=[...arr]
    newArr[id].points=newTags
    setArr(newArr);
    setValue('');
    return;
    }
}

function HandleInput(e){
//prevent default action
//e.preventDefault();
// if enter key is pressed then add the value to the tags array


// if the value is not empty then setValue to value
if(e.target.value!==''){
setValue(e.target.value);
}
}
function HandleListInput(e,index){
    const newArr=[...arr]
    newArr[id].tags[index]=e.target.value;
    setArr(newArr);
  
}

function handleTitle(e){
  const newTitle=e.target.value;
  const newArr=[...arr]
    newArr[id].title=newTitle
    setArr(newArr);
}
 
function HandleRemove(index){
  // remove item form tags array at index
  const newTags=[...arr[id].points.filter((tag,i)=>i!==index)]
  const newArr=[...arr]
  newArr[id].points=newTags
  setArr(newArr);
  
  }

  return (
    <div>
      <div className='p-4 flex flex-col  gap-2'>
      <input value={arr[id].title}  onChange={handleTitle} name='title' type="text" placeholder="List Title..." className="min-w-[100px] p-2 border border-gray-300 rounded mb-4" />
       
      <ul className='list-disc p-2'>
    {arr[id].points?.map((item,index)=>{
      return (
        <div key={index} className='flex gap-2'>
        <li >
          <input value={item} onChange={(e)=>HandleListInput(e,index)} className="min-w-[100px] p-2 border border-gray-300 rounded mb-4"/>
        </li>
        <button onClick={()=>HandleRemove(index)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</button>
        </div>
      )
    })}
    </ul>
        <input key={'points_input'} value={value} onKeyDown={handleKeyDown} onChange={HandleInput} name='tags' type="text" placeholder="Point..." className="min-w-[100px] p-2 border border-gray-300 rounded mb-4" />
        </div>
    </div>
  )
}