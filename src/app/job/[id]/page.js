// `app/page.js` is the UI for the `/` URL
import DrawerDetails from '@/components/DrawerDetails'
import { prisma } from '@/utils/detaDB'

async function getjob(id){
const results= await prisma.card.findUnique({where:{id:id},include:{tags:true}})
//const deta_data=await jobs.get(results.deta.entry_key)
return {...results,
  
  //information:deta_data.information
}
}
export default async function Page({params}) {
const data=await getjob(params.id);
  return (<>
  <div >
  <DrawerDetails  {...data}/>
  </div>
  </>)
}