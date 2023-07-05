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
import {MyTags,AdditionalDetails,DDetails,DrawerDetails} from './DrawerDetails2'



export default function Card(props){
  props.logoIMG='https://thumbsnap.com/i/3UFcD2ew.png';
console.log(props)
  return (
    <>
    

<div className=" card   bg-base-100 shadow-xl">


  <div className="card-body">
  <Link href={`/blog/${props.id}`}>
  <div className='w-3/4'>
   <h2 className="font-medium text-md md:text-2xl"><div className="align-baseline">{props.title}</div>
    </h2>
    <p className="font-bold">{props.company}</p>
    </div>
    
<p className='line-clamp-2'>{props.description?.slice(0,200)}</p>
<div className='line-clamp-2'><MyTags {...props}/></div>
</Link>



   
  </div>
</div>
</>

  )
}