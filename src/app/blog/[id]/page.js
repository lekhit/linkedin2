import MDX from '@/components/MDX';

export default function BlogPage({params}){

  const markdown=`
  # hello 
  ## this is my First blog
  I hope you like it
  #### Thank you
  `;
  
  return (
    <>
<MDX markdown={markdown}/>
    </>
  )
}