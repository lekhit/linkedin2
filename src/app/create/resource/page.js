'use client'
import { useState } from "react";
import Tags from "../TagsCreate"
const getDefault=()=>{
  return {obj:{title:'',description:'',resource_link:''},tags:[]}
}
const inputItems=['title','description','resource_link']

function App({params}) {
const data=getDefault()
const [obj,setObj]=useState(data.obj)  
const [tags,setTags]=useState(data.tags)
const [loading,setLoading]=useState(false);
async function sendData(){
  setLoading(true)
const rs=await fetch('/api/resource/create',{method:'POST',body:JSON.stringify({obj,tags})});
setLoading(false)
}
  return (
   <div >
    {inputItems.map((item,id)=>{
      return <input className="w-full p-2 border border-gray-300 rounded mb-4" key={id} placeholder={item} value={obj[item]} onChange={(e)=>setObj({...obj,[item]:e.target.value})}/>
    })}
<Tags tags={tags} setTags={setTags}/>
{!loading && <button className='btn btn-primary' onClick={sendData}> Save </button>}
{loading && <button className='btn btn-primary' disabled> Saving  <span className="loading loading-spinner loading-md"></span> </button>}
   </div>
  );
}

export default App;