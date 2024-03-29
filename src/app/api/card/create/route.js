import { NextResponse } from 'next/server'
import { prisma, } from '@/utils/detaDB'



export async function POST(req) {
  const body=await req.json();
  console.log(body)
 const body2= {
    apply_url:"https://www.google.com",
    job_title:"Frontend Manager",
    company_name:"Google",
    location:"Delhi",
    type:"Hybrid",
    last_apply:{'month':12,'year':2023,'day':23},
    salary:"20k-30k",
    description:`We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.
    If you’re interested in creating a user-friendly environment by writing code and moving forward in your career, then this job is for you. `,
    tags:[{value:'frontend'},{value:'react'},{value:'angular'}],
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
 
 
// const d=await jobs.put({information:body.information,description:body.description})

  //const data =await req.json()

  const card= await prisma.card.create({
    data:{
      modeOfWork:body.type,
      positionName:body.positionName,
      company:body.company,
    salaryView:body.salaryView,
      lastDate: body.lastDate,
      location:body.location,
     
     tags:{connectOrCreate :body.tags.map((item)=>({create:{value:item.value},
     where:{value:item.value}
     }))
     },
     information:body.information
    },
    include:{tags:true}
  })
 
  return NextResponse.json({...card})
}