'use client'
import { useState } from 'react';
import MdxCreate from '../MdxCreate';
import  { FormAction } from './form';
import Tags from '../TagsCreate';

export default function BlogCreate(){
  const [value,setValue]=useState('')
  const [tags,setTags]=useState([]);
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  function sendData(){
    const formData=new FormData();
    formData.append('title',title);
    formData.append('description',description);
    formData.append('content',value);
    formData.append('tags',JSON.stringify(tags));
    FormAction(formData);
  }
  
return (
  <div className='flex justify-center flex-col'>
<input value={title} onChange={(e)=>(setTitle(e.target.value))} type='text' name='title' placeholder='title' className='m-2 p-2 border border-gray-300 rounded mb-4'/>
<textarea value={description} onChange={(e)=>(setDescription(e.target.value))}  name='description' placeholder='description' className='m-2 p-2 border border-gray-300 rounded mb-4'/>
<MdxCreate value={value} setValue={setValue}/>
<Tags tags={tags} setTags={setTags}/>
<button className='btn btn-primary md:max-width-[100px]' onClick={sendData}>save</button>
  </div>

)
}