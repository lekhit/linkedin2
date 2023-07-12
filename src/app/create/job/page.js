
import  FormAction  from "./form";

const items=['company','salaryView','location','modeOfWork','positionName','lastDate','applyURL','typeOfOpp']

export default async function Page() {
  
  // function sendData(){
  //   const formData=new FormData();
  //   formData.append('data',JSON.stringify({...body,tags}));
  //   FormAction(formData);
  // }
  return (
    <div className='p-2'>
      <form action={FormAction} className='flex flex-col'>
{items.map((item,id)=>(<input key={id} name={item} type="text" placeholder={item} className="w-full p-2 border border-gray-300 rounded mb-4" />
        ))}
        {/* <input name='salaryView' value={body.salaryView} onChange={handleUpdate}  type="text" placeholder="Salary" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input name='location' value={body.location} onChange={handleUpdate}  type="text" placeholder="Location" className="w-full p-2 border border-gray-300 rounded mb-4" /> 
        <input name='modeOfWork' value={body.modeOfWork} onChange={handleUpdate}  type="text" placeholder="Mode of Work" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input name='positionName' value={body.positionName} onChange={handleUpdate}  type="text" placeholder="Position Name" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input name='lastDate' value={body.lastDate} onChange={handleUpdate}  type="text" placeholder="Last Date" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input name='applyURL' value={body.applyURL} onChange={handleUpdate}  type="text" placeholder="Apply URL" className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input name='typeOfOpp' value={body.typeOfOpp} onChange={handleUpdate}  type="text" placeholder="Type of Opportunity" className="w-full p-2 border border-gray-300 rounded mb-4" />
         */}
<button type='submit' className='btn btn-primary'>Save</button>
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