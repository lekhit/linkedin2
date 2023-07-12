import { prisma } from "./detaDB"
export default async function createJob(data){

  const card= await prisma.card.create({
    data:{
      ...data
    },
  })
 return card;
}