'use client'

import { useEffect, useState } from "react"

export default function Search({search}){
   const [d,setD]=useState('');
const handleClick=async ()=>{}
//   // const rs=await fetch('/api/search');
//   const data=await search()
//   console.log(data)
//   setD(JSON.stringify(data));
// }
useEffect((
  setD(search())
),[])

  return (<div>
    <button  onClick={()=>(handleClick())} className='btn btn-accent'>click me</button>
  {d}
  </div>)
}