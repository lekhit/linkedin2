
export default function Information ({title,points}
  ){
  return (<>
  

    <div className='w-full text-start text-xl font-medium '>{title}  </div>
    <ul className='list-disc p-2'>
    {points.map((item,id)=>{
      return (
        <li key={id}>{item}</li>
      )
    })}
    </ul>
    
  
</>)
}