import { NextResponse } from 'next/server'
import { prisma,jobs } from '@/utils/detaDB'
import { search } from '@/app/functions'

 const limit=2;
export async function GET(request) {
const { searchParams } = new URL(request.url)
  console.log(searchParams.get('page'))
  const page=searchParams.get('page')
  let pageNo=parseInt(page);
  const skip=(pageNo-1)*limit
  const card= await prisma.card.findMany({
    include:{tags:true},
skip:skip,
take:limit,
   where:{tags:{some:{value:'google'}}}
    ,
    
  })
 
  return NextResponse.json(card)
}