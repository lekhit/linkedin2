import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { NextResponse } from 'next/server'

export  async function  POST(req, res) {
  const body=await req.json();
  let post={message:"error",...body};
  try{ post=await prisma.posts.create({data:{
      content:body.content,
      title:body.title, 
      description:body.description,
      tags:{connectOrCreate:body.tags.map((item)=>({create:{value:item.value},where:{value:item.value}})
      )
      },
      author:{connect:{email:body.email}}
  }})}
  catch(e){
    console.log(e)
    //return NextResponse.json({'message':"error"})
  }
  return NextResponse.json(post)
}

