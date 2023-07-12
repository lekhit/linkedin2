import { prisma } from "./detaDB";
export default async function createBlogs(body){
  let post={message:'error'}
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
    return {...post};
}