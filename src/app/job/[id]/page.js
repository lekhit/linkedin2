// `app/page.js` is the UI for the `/` URL
import DrawerDetails from '@/components/DrawerDetails2'
import { prisma } from '@/utils/detaDB'

async function getjob(id=1){
  const Id=parseInt(id);
const results= await prisma.card.findUnique({where:{id:Id},include:{deta:true,tags:true}})
//const deta_data=await jobs.get(results.deta.entry_key)
return {...results,
  
  //information:deta_data.information
}
}

export default async function Page({params}) {
const data=await getjob(params.id);
console.log(data)
  return (<>
  <div >
  <DrawerDetails {...data}/>
  </div>
  </>)
}