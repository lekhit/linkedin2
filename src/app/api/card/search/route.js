import { NextResponse } from 'next/server'
import { prisma,jobs } from '@/utils/detaDB'

 
export async function GET(req) {
  


  const card= await prisma.card.findMany({
   where:{}
    ,
    include:{location:{
  select: {city:{select:{value:true}},country:{select:{value:true}}}
    },deta:true,}
  })
 
  return NextResponse.json(card)
}