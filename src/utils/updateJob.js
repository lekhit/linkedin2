import { prisma } from "./detaDB"
export default async function createJob({id,information,tags}){

  const card= await prisma.card.update({
    where:{
      id:id
    },
    data:{
      information:information,
      tags:tags.map((item)=>({connectOrCreate:{create:{value:item},where:{value:item}}})),
    },
  }
  
  )
  console.log(card)
 
}