"use client"


import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';
import {MyTags,AdditionalDetails,DrawerDetails} from './DrawerDetails2'


export default function Card(props){
  props.logoIMG='https://thumbsnap.com/i/3UFcD2ew.png';
  const [open,setOpen]=useState(false);
props.information.data=props.information?.data?.filter((item)=>(item.type!=='mdx'))
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



<DrawerDetails {...props}/>

</Box>
</div>
    </Drawer>
</>
  )
}




  return (
    <>
    
    <MyDrawer/>
<div className=" card   bg-base-100 shadow-xl">

  <img className="rounded-md absolute right-0 m-2" src={props.logoIMG} alt='logo' height={40} width={40}></img>
    

  <div className="card-body">
  <a target='_blank' href={`/job/${props.id}`}>
  <div className='w-3/4'>
   <h2 className="font-medium text-md md:text-2xl"><div className="align-baseline">{props.positionName}</div>
    </h2>
    <p className="font-bold">{props.company}</p>
    <AdditionalDetails {...props}/>
    </div>
    
<p className='line-clamp-2'>{props.description?.slice(0,200)}</p>
<div className='line-clamp-2'><MyTags {...props}/></div>
</a>



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
     
 <button className="btn btn-primary h-2 btn-link" onClick={()=>{setOpen(true)}} >{"Details"}  <ArrowForwardIcon/></button>

     </div></div>
  </div>
</div>
</>

  )
}