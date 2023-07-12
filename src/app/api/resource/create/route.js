import { NextResponse } from 'next/server'
import { prisma, } from '@/utils/detaDB'



export async function POST(req) {
  const body=await req.json();

 

  // const card= await prisma.card.create({
  //   data:{
  //     modeOfWork:body.type,
  //     positionName:body.positionName,
  //     company:body.company,
  //   salaryView:body.salaryView,
  //     lastDate: body.lastDate,
  //     location:body.location,
     
  //    tags:{connectOrCreate :body.tags.map((item)=>({create:{value:item.value},
  //    where:{value:item.value}
  //    }))
  //    },
  //    information:body.information
  //   },
  //   include:{tags:true}
  // })
  const resource= await prisma.resources.create({
    data:{
      ...body.obj,
      tags:{connectOrCreate :body.tags.map((item)=>({create:{value:item},where:{value:item}})),
    },
  },
include:{tags:true}
})
 
  return NextResponse.json({resource,body})
}