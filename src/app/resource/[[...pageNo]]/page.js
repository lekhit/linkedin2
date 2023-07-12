import Page from "@/app/page";
import Image from "next/image";
import Link from 'next/link'
import MyTags from "@/components/Tags";
import { prisma } from "@/utils/detaDB";
const limit=10;

const GetResources=(pageNo,searchParams)=>{
  console.log({pageNo,searchParams});
  let data=[
    {id:1,resource_link:'https://www.google.com',name:'Google It to find your ultimate guide',description:'This is ultimate guild to resume building',tags:[{text:'resume',id:'12'},{text:'result'}]},
    {id:2,resource_link:'https://www.google.com',name:'Google It',description:'This is ultimate guild to resume building',tags:[{text:'resume',id:'12'},{text:'result',id:'22'}]},
    {id:3,resource_link:'https://www.google.com',name:'Google It',description:'This is ultimate guild to resume building',tags:[{text:'resume',id:'12'},{text:'result',id:'22'}]},
    {id:4,resource_link:'https://www.google.com',name:'Google It',description:'This is ultimate guild to resume building',tags:[{text:'resume',id:'12'},{text:'result',id:'22'}]},
    {id:5,resource_link:'https://www.google.com',name:'Google It',description:'This is ultimate guild to resume building',tags:[{text:'resume',id:'12'},{text:'result',id:'22'}]}
  ]
 data= prisma.resources.findMany({
    skip:(pageNo-1)*limit,
    take:limit,
    where:{},//searchParams
    include:{tags:true}
  })

return data
}

export default async function Resource({params,searchParams}){
  
  const PageNo=parseInt(params?.pageNo?.length>0 ?  params?.pageNo[0]:'1')||1;
  const data=await GetResources(PageNo,searchParams);

const Navigation=()=>{
  return <div >
    {PageNo>1 && <Link href={{pathname:`/resources/${PageNo-1}`}}><button >Previous</button></Link>}
  {data.length>0 && <Link href={{pathname:`/resources/${PageNo+1}`}}><button >Next</button></Link>}
  </div>
}

  return (<>
  <div className='p-8 min-h-full'>
<div className="text-4xl text-center flex-wrap font-bold my-8">Resources</div>
<div className="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-4 ">
  {data.length>0 ? data.map((item)=>{
    return(
      <a href={item.resource_link} target='_blank' className="" key={item.id}>
      
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <Image src={'/resource_page.svg'} alt='page icon' width={100} height={142}></Image>
        </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.description}</p>
    <div className="card-actions">
      <MyTags tags={item.tags}/>
    </div>
  </div>
</div>
        
      </a>
    )
  }):<div className="text-2xl text-center flex-wrap font-bold my-8">No Resources Found</div> }
</div>
<Navigation/>
</div>
  </>)
}