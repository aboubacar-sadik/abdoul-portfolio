import Link from 'next/link';
import { FaUser, FaCalendar } from 'react-icons/fa6';
import Image from 'next/image';
import format from 'date-fns/format';

import { MDXRemote } from 'next-mdx-remote/rsc'
import { getLatestPosts, getPost, getPostsForSitmap, getRelatedPosts } from '@/api/queries';
import LatestPosts from '@/components/LatestPosts';
import RelatedPosts from '@/components/RelatedPosts';



export async function generateMetadata({ params, searchParams }, parent) {
    const post = await getPost(params.slug) || []
    // read route params

    return {
        title: post.title,
        description: post.metaDescription
    }
}

const components = {
    img: (props) => (

        <Image {...props} sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%" fill priority className='object-contain !relative' />
    ),
    h1: ({ children }) => <h1 className='mb-5 text-center'>{children}</h1>,
    h2: ({ children }) => <h2 className='mt-14 mb-1 text-2xl'>{children}</h2>,
    h3: ({ children }) => <h3 className='mt-14 mb-4 text-xl'>{children}</h3>,
    h4: ({ children }) => <h4 className='mb-5'>{children}</h4>,
    a: ({ href, children }) => {
        if (href.startsWith('https')) {
            return <a href={href} target="_blank" rel="noopener noreferrer" className='text-redCol hover:underline'>{children}</a>
        } else {
            return <Link href={href} className='text-redCol hover:underline'>{children}</Link>
        }
    },
    ul: ({ children }) => <ul className='ml-8 list-inside space-y-2 list-disc mb-4'>{children}</ul>,
    li: ({ children }) => <li className=' list-disc marker:text-redCol'>{children}</li>,
    p: ({ children }) => <p className=' mb-4 relative leading-7'>{children}</p>,
    strong: ({ children }) => <strong className=' font-semibold'>{children}</strong>,
}

export default async function page({ params }) {
    const post = await getPost(params.slug) || {}
    const latestPosts = await getLatestPosts() || []

    return (
        <section className="bg-dark-gray">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
                <article className=' col-span-1 md:col-span-2'>
                    <div className="rounded-lg overflow-hidden relative">
                        <Image
                            src={post.coverImage.url}
                            fill
                            priority
                            sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%"
                            className="!relative object-cover w-full"
                            alt={post.coverImage.fileName}
                        />
                    </div>
                    <h1 className='mt-4'>{post.title}</h1>
                    <div className="text-white flex items-center text-sm gap-4 mt-4 mb-16">
                        <span className="flex items-center gap-2">
                            <FaUser />
                            {post.author.name}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaCalendar />
                            {format(new Date(post.publishedAt), 'MM-dd-yyyy')}
                        </span>
                    </div>
                    <div>
                        <MDXRemote source={post.content.markdown} components={components} />
                    </div>
                </article>
                <aside className=' col-span-1 flex flex-col gap-8'>
                    <div className='bg-dark py-4 rounded-lg'>
                        <h3 className='ml-4 text-2xl'>Latest posts</h3>
                        <LatestPosts posts={latestPosts} />
                    </div>
                    <div className='bg-dark py-4 rounded-lg'>
                        <h3 className='ml-4 text-2xl'>Related posts</h3>
                        <RelatedPosts categories={post.categories.map((category) => category.slug)} slug={post.slug} />
                    </div>
                </aside>
            </div>
        </section>

    )
}
