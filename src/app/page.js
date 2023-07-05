// `app/page.js` is the UI for the `/` URL
import Link from "next/link"

const data=[
  {title:"internships",href:{pathname:'search',query:{category:'internship'}},bg:"bg-amber-100"},
  {title:"jobs",href:{pathname:'search',query:{category:'job'}},bg:"bg-green-100"},
  {title:"freelance",href:{pathname:'search',query:{category:'freelance'}},bg:"bg-amber-100"},
  {title:"blogs",href:{pathname:'blog'},bg:"bg-amber-100"},
]

export default function Page() {
  return <>
  <div className="h-full">

  <div className="md:p-8 grid grid-cols-2 gap-8 justify-items-center"> 
  {data.map((item,id)=>(<div key={id} className='w-full'> <Link  href={item.href}> <div className={`flex h-[150px] ${item.bg} w-full rounded justify-center items-center text-2xl text-red-600`} > {item.title} </div></Link></div>
  ))}
  </div>
  </div>
  </>
}