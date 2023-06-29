
export default function Information ({information}){
  return (<>
  {information.map((info,id)=>{
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
})}</>)
}