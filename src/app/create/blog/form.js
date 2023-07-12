'use server'
import createBlogs from "@/utils/createBlog";
export  async function FormAction(formData){
  const body=formData.get('content')?.valueOf()
  const title=formData.get('title')?.valueOf()
  const description=formData.get('description')?.valueOf()  
  const tags=formData.get('tags')?.valueOf()
  
  const body2={"email":"blekhit@gmail.com",content:body,tags:JSON.parse(tags)?.map((item)=>({value:item})),title,description}
  //console.log(body2)
  const post =await createBlogs(body2);
  //console.log({post})
  return post;
  
  
}