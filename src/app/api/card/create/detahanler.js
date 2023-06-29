import { jobs } from "@/utils/detaDB";
export default async function Detahandler({info}){
  const rs=await jobs.insert(info)
  return rs;
}