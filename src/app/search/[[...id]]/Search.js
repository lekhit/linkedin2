  'use client'
import ListOptions from '@/components/ListSelect';

import { useSearchParams } from 'next/navigation'
import { useState,useRef, useEffect } from 'react';
  const options = [
    { name: 'Internships' },
    { name: 'Jobs' },
    { name: 'Freelance' },
  ]
  
  export default function Search({submitFunction}){
    const [selected,setSelected]=useState(options[0])
    const [query,setQuery]=useState('')
    const searchParams = useSearchParams()
 
    const search = searchParams.get('query')
    const category=searchParams.get('category')
    console.log(searchParams)
    useEffect((()=>{
      if(typeof search!=='undefined' && typeof category!=='undefined'){
        setQuery(search)
        const result=options.filter(item => item.name===category)
        setSelected(result[0])
      }
    }),[search,setQuery,category])
    const inputElement = useRef();
    return (
      <>
<form className='flex gap-4 pb-8' action={submitFunction}>
<input value={query}  onChange={(e)=>(setQuery(e.target.value))} type="text" name='search' placeholder={'Search...'} className="input input-bordered w-full max-w-xs" />
<input ref={inputElement} type="text" name='cat' hidden value={selected?.name} />

  <ListOptions selected={selected} setSelected={setSelected} options={options}/>
  <button className='btn ' type='submit'>search</button>
</form>
      </>
    )
  }