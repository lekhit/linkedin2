

import { NextResponse } from 'next/server'
import { prisma, } from '@/utils/detaDB'



export async function POST(req) {
  const {id,information,tags}=await req.json();
  //console.log({id,information,tags})
  //const tags=['tag1','tag2','tag3']
  const card= await prisma.card.update({
    where:{
      id:id
    },
    data:{
      information:{data:[...information]},
    tags:{upsert:
      tags.map((item)=>({
        create:{value:item},
        update:{value:item},
        where:{value:item}
      })),
    }
    },
    include:{tags:true }
  }
  
  )
  console.log({card})
  return NextResponse.json({...card})
}

