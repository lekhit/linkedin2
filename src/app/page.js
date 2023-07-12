// `app/page.js` is the UI for the `/` URL
import Link from "next/link"
import Image from "next/image"

const data=[
  {title:"internships",img:'/intern.png' ,href:{pathname:'search',query:{category:'internship'}},bg:"bg-amber-100"},
  {title:"jobs",img:'/jobseeker.png',href:{pathname:'search',query:{category:'job'}},bg:"bg-green-100"},
  {title:"freelance",img:'/freelancer.png',href:{pathname:'search',query:{category:'freelance'}},bg:"bg-teal-100"},
  {title:"blogs",img:'/employee.png',href:{pathname:'blog'},bg:"bg-orange-100"},
]

export default function Page() {
  return <>
  <div className="h-full">

  <div className="md:p-8 p-2 py-8 grid grid-cols-2 gap-8   "> 
  {data.map((item,id)=>(<div key={id} className='flex w-full justify-center'> <Link  href={item.href}> <div className={`flex h-[243px] w-full md:w-[244px] flex-col bg-base-100  justify-around rounded-[15px] items-center text-xl md:text-4xl `} > 
  <Image alt={`${item.title} image`} width={150} height={150} src={item.img}/>
  <div className="">{item.title}</div> </div></Link></div>
  ))}
  </div>
  </div>
  </>
}