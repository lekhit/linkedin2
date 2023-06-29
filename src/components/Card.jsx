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






export default function Card(props){
  props.logoIMG='https://thumbsnap.com/i/3UFcD2ew.png';
  const [open,setOpen]=useState(false);

  function DrawerDetails(){
    return (
      <div className='p-4 md:p-10 m-4  border-2 rounded-lg '>
<div className='flex justify-center font-bold text-xl md:text-4xl'>{props.company}</div>
<div className='flex flex-col items-center  p-10 m-4  border-2 rounded-lg ' > 
<div className='text-2xl md:text-6xl'>
{props.positionName} </div>
<AdditionalDetails/>
<MyTags/>

</div>
{/* adding details for the skills here */}
<div className=' md:m-4 md:p-6 md:border-2 md:rounded-lg'>

{props.information.map((info,id)=>{
  return (
    <div key={id} className='md:m-4 md:p-6 md:border-2 md:rounded-lg'>
    <div className='w-full text-start text-xl font-medium '>{info.title}  </div>
    <ul className='list-disc p-2'>
    {info.points.map((item,id)=>{
      return (
        <li key={id}>{item}</li>
      )
    })}
    </ul>
    </div>
    
  )
})}
</div>

      </div>
    )
  }

function MyDrawer(){
  return (
    <>
    <Drawer
    anchor='bottom'
      open={open}
      onClose={()=>(setOpen(false))}
      onOpen={()=>setOpen(true)}
      transitionDuration={{enter:300,exit:300}}
    >
<div className=' md:sticky top-2 flex justify-end p-4'>
<a target='_blank' href={props.applyURL}>
<button className='btn btn-primary  ' onClick={()=>(setOpen(false))}>
Apply Now
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</button></a>

  <button className='btn btn-primary btn-square mx-2' onClick={()=>(setOpen(false))}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

</button>
</div>

<div

className=' ease-in-out  animate-in slide-in-from-bottom deplay-200 duration-500  '

     >
<Box

sx={{
  width:'auto',
  height:"75vh",
}}
role="presentation"
onClick={()=>(setOpen(false))}
onKeyDown={()=>(setOpen(false))}
>



<DrawerDetails/>



</Box>
</div>
    </Drawer>
</>
  )
}

  function AdditionalDetails(){
    return (
      <div className="flex text-sm font-light my-4">
  <div className="mr-4"><span className='mr-2'><CurrencyRupeeIcon/></span> {props.salaryView}</div> 
  <div className="w-[2px]  bg-white"></div> 
  <div className="mx-4"> <span className='mx-2'><LocationOnIcon/></span>  {props.location}</div>
  <div className="w-[2px]  bg-white"></div> 
  <div className="ml-4"><span className='mx-2'><AccessTimeIcon/></span>  {props.lastData}</div>
</div>
    )
  }
function MyTags(){
  return (
    <div className='flex flex-between gap-4 flex-wrap p-3'>
      {props.tags.map((item,id)=>{
        return (
        <div key={item.id} className='bg-secondary rounded-full px-4' > {item.value} </div>
        )
      })}
    </div>
  )
}



  return (
    <>
    
    <MyDrawer/>
<div className=" card   bg-base-100 shadow-xl">

  <img className="rounded-md absolute right-0 m-2" src={props.logoIMG} alt='logo' height={40} width={40}></img>
    

  <div className="card-body">
  <Link href={`/job/${props.id}`}>
  <div className='w-3/4'>
   <h2 className="font-medium text-md md:text-2xl"><div className="align-baseline">{props.positionName}</div>
    </h2>
    <p className="font-bold">{props.company}</p>
    <AdditionalDetails/>
    </div>
    
<p className='line-clamp-2'>{props.description?.slice(0,200)}</p>
<div className='line-clamp-2'><MyTags/></div>
</Link>



    <div className="card-actions justify-end ">
    <a target='_blank' href={props.applyURL}>
<button className='btn btn-primary' >
Apply Now
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</button></a>
<div className="flex-1"></div>
      <div className=' flex '>
    <button className="btn btn-primary h-2 btn-link  "><ShareIcon/> Share</button>
      <button className="btn btn-primary h-2 btn-link" onClick={()=>(setOpen(true))}>{"Details"}  <ArrowForwardIcon/></button>
    </div></div>
  </div>
</div>
</>

  )
}