
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import Tags from '../Tags'

export default async function Page() {
  const session=await getServerSession(authOptions);
  
  return (
    <div className='p-2'>
      <form>
        <input name='company' type="text" placeholder="Company" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input name='salaryView' type="text" placeholder="Salary" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input name='location' type="text" placeholder="Location" className="w-full p-2 border border-gray-300 rounded mb-4" /> 
        <input name='modeOfWork' type="text" placeholder="Mode of Work" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input name='tags' type="text" placeholder="Tags" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input name='positionName' type="text" placeholder="Position Name" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input name='lastDate' type="text" placeholder="Last Date" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input name='applyURL' type="text" placeholder="Apply URL" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input name='typeOfOpp' type="text" placeholder="Type of Opportunity" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input name='information' type="text" placeholder="Information" className="w-full p-2 border border-gray-300 rounded mb-4" />
      <Tags/>
      </form>
    </div>
  )
}
// company      String
//   salaryView   String
//   location     String?
//   modeOfWork   String // remote hybrid office convert to enum
//   tags         Tags[]
//   positionName String
//   createdAt    DateTime @default(now())
//   lastDate     String?
//   applyURL     String?
//   typeOfOpp    String   @default("jobs") //jobs internship freelance
//   information  Json
//   savedBy      User[]