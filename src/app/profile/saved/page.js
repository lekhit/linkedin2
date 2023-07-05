import { SearchPage } from "@/app/search/[[...id]]/page";
import { prisma } from "@/utils/detaDB";
import { useSession } from "next-auth/react";

const limit=8

async function getSavedData(userEmail,pageNo=1){
  
const data = await prisma.card.findMany(
  {skip:(pageNo*limit),
    take:limit,

    where:{
    user:{is:{email:userEmail}}
  },
orderBy:{
  createdAt:'desc'
}
}
);
return data;
}

export default async  function Page({params,}){
  
}