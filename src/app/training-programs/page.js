import Image from "next/image"

async function GetTraningData(){
return [
  {name:"How to Market Yourself as a Coach or Consultant",
taughtBy:"Ammie Json", Rate:"Free"
}
]
}
export default async function Page(){
  const data=await GetTraningData()
function DisplayData(){
  if(data.length>0){
    return(
<div className="grid md:grid-cols-4 gap-4">
    {data.map((item,id)=>(
      <div key={id} className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/resource.jpg"  alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.taughtBy}</p>
    <p className="text-lg font-bold ">{item.Rate}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    ))}
    
    </div>
    )

  }
  else{
    return(<div> Comming Soon...</div>)
  }
}

  return (
    <>
    <div className="font-bold flex text-2xl py-4 ">Training Programs</div>
    <DisplayData/>
    
    </>
  )
}