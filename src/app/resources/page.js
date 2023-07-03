import Image from "next/image";

const resouce=[

]

const GetResources=()=>{
return [
  {id:1,resource_link:'https://www.google.com',name:'Google It to find your ultimate guide'},
  {id:2,resource_link:'https://www.google.com',name:'Google It'},
  {id:3,resource_link:'https://www.google.com',name:'Google It'},
  {id:4,resource_link:'https://www.google.com',name:'Google It'},
  {id:5,resource_link:'https://www.google.com',name:'Google It'}
]
}

export default async function Resource(){
  const data=await GetResources();
  return (<>
  <div className='p-8 min-h-full'>
<div className="text-4xl text-center flex-wrap font-bold my-8">Resources</div>
<div className="grid justify-items-center grid-cols-2 md:grid-cols-5 gap-4 ">
  {data.map((item)=>{
    return(
      <a href={item.resource_link} target='_blank' className="w-[100px]" key={item.id}>
        <Image src={'/resource_page.svg'} alt='page icon' width={100} height={142}></Image>
        <div className="">{item.name}</div>
      </a>
    )
  })}
</div>
</div>
  </>)
}