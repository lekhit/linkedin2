"use client"
import {  Transition } from '@headlessui/react'


import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';
import Points from '@/components/Points';
import MDX from './MDX';


export function DDetails({info}){
  if(info.type==='mdx'){
    return (<MDX markdown={info.content}/>)
  }
  else if(info.type==='description'){
    return (<>
    <div>
    <div className="w-full text-start text-xl font-medium ">{info.title}</div>
    <div>{info.content}</div>
    </div></>)
  }
  else{
    return(<Points title={info.title} points={info.points}/>)
  }
}

export function MyTags({tags}){
  return (
    <div className='flex flex-between gap-4 flex-wrap p-3'>
      {tags.map((item,id)=>{
        return (
        <div key={item.id} className='bg-secondary rounded-full px-4' > {item.value} </div>
        )
      })}
    </div>
  )
}


export function AdditionalDetails({salaryView,location,lastDate}){
  return (
    <div className="flex text-sm font-light my-4">
<div className="mr-4"><span className='mr-2'><CurrencyRupeeIcon/></span> {salaryView}</div> 
<div className="w-[2px]  bg-white"></div> 
<div className="mx-4"> <span className='mx-2'><LocationOnIcon/></span>  {location}</div>
<div className="w-[2px]  bg-white"></div> 
<div className="ml-4"><span className='mx-2'><AccessTimeIcon/></span>  {lastDate}</div>
</div>
  )
}


export function DrawerDetails(props){
  //console.log(props.information)
  return (
    <div className='p-4 md:p-10 m-4  border-2 rounded-lg '>
<div className='flex justify-center font-bold text-xl md:text-4xl'>{props.company}</div>
<div className='flex flex-col items-center  p-10 m-4  border-2 rounded-lg ' > 
<div className='text-2xl md:text-6xl'>
{props.positionName} </div>
<AdditionalDetails {...props} />
<MyTags {...props}/>

</div>
{/* adding details for the skills here */}
<div className=' md:m-4 md:p-6 md:border-2 md:rounded-lg'>

{props.information && props.information?.data?.map((info,id)=>{
return (
  <div key={id} className='md:m-4 md:p-6 md:border-2 md:rounded-lg'>
  {/* <div className='w-full text-start text-xl font-medium '>{info.title}  </div>
  <ul className='list-disc p-2'>
  {info.points.map((item,id)=>{
    return (
      <li key={id}>{item}</li>
    )
  })}
  </ul> */}
  <DDetails key={id} info={info}/>
  </div>
  
)
})}
</div>

    </div>
  )
}


export default function Card(props){

function MyDrawer(){
  return (
    <>
   
<div className=' md:sticky top-2 flex justify-end p-4'>
<a target='_blank' href={props.applyURL}>
<button className='btn btn-primary  ' onClick={()=>(setOpen(false))}>
Apply Now
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</button></a>
</div>

<div

className=' ease-in-out  animate-in slide-in-from-bottom deplay-200 duration-500  '

     >


<DrawerDetails {...props}/>




</div>

</>
  )
}

return (<>
<MyDrawer/>
</>)

}