import Card from "@/app/components/Card"
import SearchBox from '@/app/components/searchBox'

export default function Page({ params }) {

  return <div className="">
    <div className="flex justify-center font-bold pt-10 p-4 py-10 text-4xl text-green-400">
      {params.cat.toString().toUpperCase()}
    </div>
<SearchBox/>
    <div className="flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <Card/><Card/><Card/><Card/><Card/><Card/><Card/>
</div>

</div>

<div className=" mt-8 join flex justify-center items-center">
<button className="join-item btn">{"<- Prev"}</button>

  <button className="join-item btn">{"Next ->"}</button>
</div>
    </div>

}