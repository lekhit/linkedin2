'use client'
import { useState } from "react";
import { InformationCreate } from "../../informationCreate";
import Tags from "../../TagsCreate"
import { useRouter } from "next/navigation";

function App({params}) {
const router=useRouter();
const {id}=params;
  const [arr, setArr] = useState([{'title':'some',description:'things',type:'description'}]);
const [tags,setTags]=useState(['some thing'])
function sendData(){
 fetch('/api/card/update',{method:'POST',body:JSON.stringify({['information']:arr,tags,id})});
router.push(`/job/${id}`)
}
  return (
   <div>
<InformationCreate key={'info'} arr={arr} setArr={setArr}/>
<Tags tags={tags} setTags={setTags}/>
<button className='btn btn-primary' onClick={sendData}> Save </button>
   </div>
  );
}

export default App;