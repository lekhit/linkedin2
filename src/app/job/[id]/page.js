// `app/page.js` is the UI for the `/` URL
import DrawerDetails from '@/components/DrawerDetails'
import { prisma } from '@/utils/detaDB'

function getjob(id=1){
  const Id=parseInt(id);
const results=prisma.card.findUnique({where:{id:Id},include:{deta:true,tags:true}})
}
export default function Page({params}) {

  return (<>
  <div >
  <DrawerDetails/></div>
  </>)
}