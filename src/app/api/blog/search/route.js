import { NextResponse } from 'next/server'
import { blogs } from '@/utils/detaDB'




export async function GET(request) {

  const { searchParams } = new URL(request.url)
  //const page=searchParams.get('tags')
 
  const new_blogs=await blogs.fetch({})
 
  return NextResponse.json(new_blogs)
}