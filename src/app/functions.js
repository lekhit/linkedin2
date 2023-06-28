'use server'
import {jobs} from '@/utils/detaDB'

const data=[{
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
},{
  id:'2',
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

]

export  async function search(){
const rs=await jobs.fetch({"company_name":"Google"})
console.log(rs)
return rs;
}


