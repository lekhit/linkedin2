import Card from "@/components/Card"
import Link from "next/link";

import { prisma } from "@/utils/detaDB";
import Search from './Search'
import { redirect } from "next/navigation";




const data=[
{
    id:'1',
    applyURL:"https://www.google.com",
    share_url:'https://bing.com',
    positionName:"Frontend Manager",
    companyName:"Google",
    location:"Delhi",
    type:"Hybrid",
    lastData:"23/Dec/2023",
    salaryView:"20k-30k",
    description:`We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our companyName and customer needs into functional and appealing interactive applications.
    If you’re interested in creating a user-friendly environment by writing code and moving forward in your career, then this job is for you. `,
    tags:[{value:'frontend',id:'1'},{value:'react',id:"2"},{value:'angular',id:'3'}],
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
    id:'1',
    applyURL:"https://www.google.com",
    share_url:'https://bing.com',
    positionName:"Frontend Manager",
    companyName:"Google",
    location:"Delhi",
    type:"Hybrid",
    lastData:"23/Dec/2023",
    salaryView:"20k-30k",
    description:`We are looking for a qualified Front-end developer to join our IT team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our companyName and customer needs into functional and appealing interactive applications.
    If you’re interested in creating a user-friendly environment by writing code and moving forward in your career, then this job is for you. `,
    tags:[{value:'frontend',id:'1'},{value:'react',id:"2"},{value:'angular',id:'3'}],
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
const limit=4;
async function getData(page=1,search=undefined) {
  let query={}
if(typeof search !== 'undefined'){
  if(typeof search.query!=='undefined' &&  search.query!==''){
query={
  tags:{
      some:{value:{contains:search.query}}
    }};
  }
  if(typeof search.category!=='undefined' &&  search.category!=='')
query.typeOfOpp=search.category.toLowerCase();
}

 const count=await prisma.card.count({ where:query});
  const pageNO=parseInt(page)
  const res = await prisma.card.findMany({
    skip:(page-1)*limit,
    take:limit,
  where:query,
    include:
      {deta:true,tags:true}
  });
  const deta_data=[]
  for(let item in res){
    const i=res[item];
    const key=i.deta.entry_key;
   const d= {} //await jobs.get(key)
   deta_data.push(d);
   i.information=d.information;
   i.description=d.description
  }
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
 
const np=(pageNO+1)%(Math.floor(count/limit)+1);
 const nextPage= (np)<1?1:np
 const prePage=(pageNO-1)===0?1:pageNO-1;
  return {res,count,prePage,nextPage}
}
const submitFunction=async (formData)=>{
  "use server"
const dat=formData.get('search');
const category=formData.get('cat')
redirect(`/search/1/?query=${dat}&category=${category}`)
}

export default async  function Page({ params,searchParams }) {
const num=params.id;
const data= await getData(num?num:1,searchParams)

  return <div className="">

    <div className="flex justify-center p-4"> 
    <Search submitFunction={submitFunction}/>
    </div>
    
    <div className="flex justify-center">
      
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{data.res.map((item)=>(<Card key={item.id} {...item}/>))}
</div>

</div>

<div className=" mt-8 join flex justify-center items-center">
{data.prePage!==parseInt(num) && <Link href={{pathname:`/search/${data.prePage}`, query:{...searchParams}}}><button   className="join-item btn">
  
  {"<- Prev"}
  
  </button>
</Link>}

 {data.nextPage!==parseInt(num) && data.nextPage!==1 && <Link href={{pathname:`/search/${data.nextPage}`, query:{...searchParams}}} > <button className="join-item btn">{"Next ->"}</button></Link>
}</div>
    </div>

}