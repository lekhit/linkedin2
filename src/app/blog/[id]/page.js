import { MDXRemote } from 'next-mdx-remote/rsc'

export default function BlogPage({params}){
const markdown=`
# hello 
## this is my First blog
I hope you like it
#### Thank you
`;

  return (
    <>
<article className="md:p-4 m-4 prose lg:prose-xl">
<MDXRemote source={markdown} />
{params.id}
</article>
    </>
  )
}