const MyLink='https://www.google.com'
export default function  Resume(){
return (<>

<div className='p-8 min-h-full'>

<div className="font-bold flex text-2xl py-4 ">Score My Resume</div>
<a href={MyLink} target='_blank'>
<div className=' btn btn-primary'>Scan Your Resume 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
</svg>

</div>
</a>
</div>
</>)
}