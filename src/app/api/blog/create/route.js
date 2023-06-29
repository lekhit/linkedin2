import { NextResponse } from 'next/server'
import { blogs } from '@/utils/detaDB'




export async function POST(req) {

  const body=await req.json()
 
  body.createdAT=new Date();
  const blog=await blogs.insert(body);
 
  return NextResponse.json(blog)
}