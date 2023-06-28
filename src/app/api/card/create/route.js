import { NextResponse } from 'next/server'
import { prisma,jobs } from '@/utils/detaDB'
import { create } from '@mui/material/styles/createTransitions'

 
export async function POST(req) {
  
 const i= {
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
    
  }
 
  const deta_data={description:`We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.
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
  ]}]}
const d=await jobs.put(deta_data)
console.log(d)
  const data =await req.json()
  const card= await prisma.card.create({
    data:{
      modeOfWork:'hybrid',
      positionName:"Full Stack",
      company:{create:{name:'google',
      deta:{create:{
        entry_key:'8',
        name:'company_table'
      }},
      }},
      LastDate: new Date(2023,12,23),
      salaryDuration:"monthly",
      salaryMax:{create:{value:30.0,placeValue:'k'}},
      salaryMin:{create:{value:20,placeValue:'k'}},
      location:{create:{
        city:{create:{value:'delhi'}},
        country:{create:{value:'india'}},  
      }},
      deta:{create:{
        entry_key:d.key,
        name:"jobs"
      }},
     
    },
    include:{location:true,deta:true,}
  })
 
  return NextResponse.json(card)
}