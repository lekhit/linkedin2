import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { NextResponse } from 'next/server'
import createBlogs from "@/utils/createBlog";

export  async function  POST(req, res) {
  const body=await req.json();
  const post =await createBlogs(body);
  return NextResponse.json(post)
}

