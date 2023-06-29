"use client"

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
import MDX from '@/components/MDX';
import Information from './Information';

const props={
  id:'1',
  apply_url:"https://www.google.com",
  share_url:'https://bing.com',
  job_title:"Frontend Manager",
  company_name:"Google",
  location:"Delhi",
  type:"Hybrid",
  last_apply:"23/Dec/2023",
  salary:"20k-30k",
  description:`We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.
  If you’re interested in creating a user-friendly environment by writing code and moving forward in your career, then this job is for you. `,
  tags:[{text:'frontend',id:'1'},{text:'react',id:"2"},{text:'angular',id:'3'}],
  information:[{title:'Requirements and Skills',points:[
    'Work or school experience as a Data Scientist, Python Developer or similar role',
    'Expertise with Python data packages (Pandas, NumPy), Python Data Structures and knowledge of general programming principles',
    'Expertise using Microsoft Office Suite',
    'Knowledge of SQL Querying techniques and SQL integration.',
    'Experience using data visualization and Business Intelligence tools (pyPlot, Power BI)',
    'Familiarity with Data Engineering Tools and pipelines is a plus (pySpark, Apache Airflow)',
    'OCR Experience Helpful – Not required',
    'Working with documents in HIPAA compliant manner Team spirit',
    'Good problem-solving skills',
    'Technical degree in Computer Science, Engineering, Data Science or relevant field',
  ]}, {title:'Responsibilities',points:[
    'Working closely with our engineering team to build efficient ETL pipelines',
'Building tools and frameworks to provide scalable data-driven insights',
'Producing data-driven reports to supplement investment decisions',
  ]}]
}

const markdown=`
  # hello 
  ## this is my First blog
  I hope you like it
  #### Thank you
  `;


export default function DrawerDetails(){

  function DrawerDetails(){
    return (
      <div className='bg-base-100 p-4 md:p-10 m-4  border-2 rounded-lg '>
<div className='flex justify-center font-bold text-xl md:text-4xl'>{props.company_name}</div>
<div className='flex flex-col items-center  p-10 m-4  border-2 rounded-lg ' > 
<div className='text-2xl md:text-6xl'>
{props.job_title} </div>
<AdditionalDetails/>
<MyTags/>

</div>
{/* adding details for the skills here */}
<div className=' md:m-4 md:p-6 md:border-2 md:rounded-lg'>

<Information information={props.information}/>

<MDX markdown={markdown}/>

</div>

      </div>
    )
  }
function ApplyButton(){
  return(<div className=' sticky top-2 flex justify-end p-4 '>
  <a target='_blank' href={props.apply_url}>
  <button className='btn btn-primary  '>
  Apply Now
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
  </button></a>
  
  </div>)
}

function MyDrawer(){
  return (
    <>
   <ApplyButton/>


<Box

>



<DrawerDetails/>



</Box>

</>
  )
}

  function AdditionalDetails(){
    return (
      <div className="flex text-sm font-light my-4">
  <div className="mr-4"><span className='mr-2'><CurrencyRupeeIcon/></span> {props.salary}</div> 
  <div className="w-[2px]  bg-white"></div> 
  <div className="mx-4"> <span className='mx-2'><LocationOnIcon/></span>  {props.location}</div>
  <div className="w-[2px]  bg-white"></div> 
  <div className="ml-4"><span className='mx-2'><AccessTimeIcon/></span>  {props.last_apply}</div>
</div>
    )
  }
function MyTags(){
  return (
    <div className='flex flex-between gap-4 flex-wrap p-3'>
      {props.tags.map((item,id)=>{
        return (
        <div key={item.id} className='bg-secondary rounded-full px-4' > {item.text} </div>
        )
      })}
    </div>
  )
}




  return (
    <>

<MyDrawer/>
</>

  )
}