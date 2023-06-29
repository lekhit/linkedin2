import { MDXRemote } from 'next-mdx-remote/rsc'

export default function MDX({markdown}){


  return (
    <>
<article className="md:p-4 m-4 prose lg:prose-xl">
<MDXRemote source={markdown} />
</article>
    </>
  )
}