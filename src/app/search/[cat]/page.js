import Card from "@/app/components/Card"
import {Deta} from 'deta';
import Search from '@/app/components/Search'
const deta=Deta('c0wr3pyqvsb_FRoUY81qRxZd7EzY8U1Ww52zKAVgNYZk')


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

export default function Page({ params }) {

  return <div className="">

    <div className="flex justify-center font-bold pt-10 p-4 py-10 text-4xl text-green-400">
      {params.cat.toString().toUpperCase()}
    </div>
    <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{data.map((item)=>(<Card key={item.id} {...item}/>))}
</div>

</div>

<div className=" mt-8 join flex justify-center items-center">
<button className="join-item btn">{"<- Prev"}</button>

  <button className="join-item btn">{"Next ->"}</button>
</div>
    </div>

}