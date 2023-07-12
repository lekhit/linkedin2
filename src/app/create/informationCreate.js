
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import DescriptionCreate from './DescriptionCreate'
import PointsCreate from './PointsCreate'
import Markdown from 'markdown-to-jsx';

const people = [
  { name: 'List' },
  { name: 'Description' },
  { name: 'MDX' },,
]

export  function Example({selected, setSelected}) {
  

  return (
    <div className="  w-72">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white text-primary py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export  function MdxCreate({arr,setArr,id}){
const handleInput=(e)=>{
  const newArr=[...arr]
  newArr[id].content=e.target.value;
  setArr(newArr);
}

  return (
    <div>
  
        <div className='p-4 flex flex-col md:flex-row  gap-2'>
        <textarea name ='content' onChange={handleInput} placeholder="Start typing..." className="textarea textarea-lg w-full " ></textarea>
        <article className="prose lg:prose-xl textarea  textarea-lg w-full ">
        <Markdown>        
          {arr[id].content}
          </Markdown>
          </article>
          </div>
  
    </div>
  
  )
  }

export  function InformationCreate({arr,setArr}) {
  const [selected, setSelected] = useState(people[0]);
  const [components,setComponents]=useState(arr.map((item,id)=>{
    if(item.type==='points'){return PointsCreate }
    if(item.type==='description'){return DescriptionCreate }
    if(item.type==='mdx') return MdxCreate
  }))
  const handleAdd=()=>{
    
    function CreateElement(){
      if(selected.name==='List') return {item: PointsCreate , value:{'title':'',points:[],type:'points'}}
      if(selected.name==='Description') return {item:DescriptionCreate , value:{'title':'',content:'description',type:'description'}}
    if(selected.name==='MDX')  return {item:MdxCreate,value:{type:'mdx',content:''}}
    }
      const Item=CreateElement();
      const newArr=[...arr,Item.value]
      setArr(newArr);
      console.log(arr);
      setComponents([...components, Item.item ])
  
  }

  return (
    <div>
      
<div className='flex  flex-col rounded border-2 m-4 gap-4 p-2'>
  {components.map((Item,id)=>(
  <div className='rounded p-8 border-2' key={id}> {arr[id].type}
  <Item  arr={arr} setArr={setArr} id={id}/></div>))}
  <div className='flex justify-center gap-2'>
<Example selected={selected} setSelected={setSelected}/>
<button className='btn btn-primary' onClick={handleAdd}>Add</button>
</div>

</div>

    </div>
  )
}

