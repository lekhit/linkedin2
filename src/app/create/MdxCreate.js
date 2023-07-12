'use client'

import Markdown,{compiler} from 'markdown-to-jsx';

export default function MdxCreate({value,setValue}){

return (
  <div>

      <div className='p-4 flex flex-col md:flex-row  gap-2'>
      <textarea name ='content' onChange={(e)=>(setValue(e.target.value))} placeholder="Start typing..." className="textarea textarea-lg w-full " ></textarea>
      <article className="prose lg:prose-xl textarea  textarea-lg w-full ">
      <Markdown>        
        {value}
        </Markdown>
        </article>
        </div>

  </div>

)
}