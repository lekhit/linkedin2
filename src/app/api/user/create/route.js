import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { NextResponse } from 'next/server'
import { prisma } from "@/utils/detaDB";

export  async function  POST(req, res) {
  const body=await req.json();
try
  {const user=await prisma.user.create({
  data: {
  email: body.email,  
  name: body.name,      
  }
})
return NextResponse.json(user)
}
catch(e){ console.log(e)
  return NextResponse.json({user:body,'message':"already exists"})
}
  
}

