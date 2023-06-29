
//just needs tags prps
export default function MyTags(props){
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

