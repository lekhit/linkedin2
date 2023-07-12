'use server'

import { redirect } from "next/navigation";
import createJob from "@/utils/createJob";

export default async function formAction(formData){
  const company=formData.get('company')?.valueOf();
  const salaryView=formData.get('salaryView')?.valueOf();
  const location=formData.get('location')?.valueOf();
  const modeOfWork=formData.get('modeOfWork')?.valueOf();
  const positionName=formData.get('positionName')?.valueOf();
  const lastDate=formData.get('lastDate')?.valueOf();
  const applyURL=formData.get('applyURL')?.valueOf();
  const typeOfOpp=formData.get('typeOfOpp')?.valueOf();
  const body2={company,salaryView,location,modeOfWork,positionName,lastDate,applyURL,typeOfOpp}
  console.log(body2)
const job=await createJob(body2)
redirect(`/create/job/${job.id}`)
}

{/* <input name='company' type="text" placeholder="Company" className="w-full p-2 border border-gray-300 rounded mb-4" />
<input name='salaryView' type="text" placeholder="Salary" className="w-full p-2 border border-gray-300 rounded mb-4" />
<input name='location' type="text" placeholder="Location" className="w-full p-2 border border-gray-300 rounded mb-4" /> 
<input name='modeOfWork' type="text" placeholder="Mode of Work" className="w-full p-2 border border-gray-300 rounded mb-4" />
<input name='positionName' type="text" placeholder="Position Name" className="w-full p-2 border border-gray-300 rounded mb-4" />
<input name='lastDate' type="text" placeholder="Last Date" className="w-full p-2 border border-gray-300 rounded mb-4" />
<input name='applyURL' type="text" placeholder="Apply URL" className="w-full p-2 border border-gray-300 rounded mb-4" />
<input name='typeOfOpp' type="text" placeholder="Type of Opportunity" className="w-full p-2 border border-gray-300 rounded mb-4" /> */}
