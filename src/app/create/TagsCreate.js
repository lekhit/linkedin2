'use client'
import { useState } from 'react'



export default function Example({tags,setTags}) {
 
 const [value,setValue]=useState('');
function handleKeyDown(e){
  if(e.key==='Enter' && e.target.value!==''){
    setTags([...tags,value]);
    setValue('');
    console.log('enter pressed')
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
function HandleRemove(index){
// remove item form tags array at index
setTags(tags.filter((tag,i)=>i!==index));

}
 

  return (
    <div>
      <div className='p-4 flex flex-wrap  gap-2'>
        <div className='flex-wrap  flex gap-4'>
        {tags.map((tag,index)=><div classname='  flex gap-2' key={index}>
         <div className='flex gap-2 rounded-xl bg-secondary p-2'> {tag}
         <button onClick={()=>HandleRemove(index)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</button>
         </div>
       
</div>)}</div>

        <input value={value} key={'tags_input'} onKeyDown={handleKeyDown} onChange={HandleInput} name='tags' type="text" placeholder="Tag" className="min-w-[100px] p-2 border border-gray-300 rounded mb-4" />
        </div>
    </div>
  )
}