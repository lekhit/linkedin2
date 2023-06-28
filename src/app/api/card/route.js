import { NextResponse } from 'next/server'
import { jobs } from '@/utils/detaDB'

 
export async function GET(request,{params}) {
const data=await jobs.fetch({})
  return NextResponse.json({ data,params })
}