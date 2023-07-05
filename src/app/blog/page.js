import BlogCard from "@/components/BlogCard"
import Link from "next/link";

import { prisma } from "@/utils/detaDB";
import { redirect } from "next/navigation";


const limit=4;
async function getData(page=1) {
 
 const count=await prisma.card.count();
  const res = await prisma.posts.findMany({
    skip:(page-1)*limit,
    take:limit,
    include:
      {tags:true}
  });
 
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
 
const np=(page+1)%(Math.floor(count/limit)+1);
 const nextPage= (np)<1?1:np
 const prePage=(page-1)===0?1:page-1;
  return {res,count,prePage,nextPage}
}

const submitFunction=async (formData)=>{
  "use server"
const dat=formData.get('search');
redirect(`/search/1/?query=${dat}`)
}


export function SearchPage({data,num}){

  function Pagination({data}){
    if (data.res.length>0)
   return <>{data.res.map((item)=>(<BlogCard key={item.id} {...item}/>))}
   </> 
   else{
    return (
      <>
      Stay tuned for more details....
      </>
    )
   }
  }
  return (
<div className="">

<div className="flex justify-center p-4"> 
{/* add search later */}
</div>

<div className="flex justify-center">
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<Pagination data={data}/>
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

  )
}

export default async  function Page({ params,searchParams }) {
const num=params.id===undefined?1:params.id;
const PageNo=parseInt(num)
const data= await getData(PageNo,searchParams)

  return (
    <SearchPage data={data} num={num}/>
  )
}