import MDX from '@/components/MDX';



import { SearchPage } from "@/app/search/[[...id]]/page";
import { prisma } from "@/utils/detaDB";
import { useSession } from "next-auth/react";


async function getData(id){
  
const data = await prisma.posts.findUnique(
  {
    where:{
id:id
  },include:{author:true,tags:true}
}
);
return data;
}

export default async  function Page({params,}){
  const data=await getData(params.id)

  const markdown=`
  # hello 
  ## this is my First blog
  I hope you like it
  #### Thank you
  `;
  
  return (
    <>
    <div>
<MDX markdown={data.content}/>

</div>
    </>

  )
}


export  function BlogPage({params}){

}