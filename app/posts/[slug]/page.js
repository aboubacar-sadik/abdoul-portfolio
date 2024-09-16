import Link from 'next/link';
import { FaUser, FaCalendar } from 'react-icons/fa6';
import Image from 'next/image';
import format from 'date-fns/format';

import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost } from '@/api/queries';
import LatestPosts from '@/components/LatestPosts';
import RelatedPosts from '@/components/RelatedPosts';
import { PortableText } from 'next-sanity';



// export async function generateMetadata({ params, searchParams }, parent) {
//     const post = await getPost(params.slug) || []
//     // read route params

//     return {
//         title: post.title,
//         description: post.metaDescription
//     }
// }

const components = {
    types: {
        // Exemple d'image personnalisée
        image: ({ value }) => (
            // <Image src={} alt={} width={500} height={300} className='object-contain' />

            <div className="relative mb-5 overflow-hidden rounded-lg">
                <Image
                    src={value.asset.url}
                    fill
                    priority
                    sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%"
                    className="!relative object-cover w-full"
                    alt={value.alt || 'Image'}
                />
            </div>
        ),
    },
    block: {
        h1: ({ children }) => <h1 className="mb-5 text-center">{children}</h1>,
        h2: ({ children }) => <h2 className="mb-1 text-xl mt-14">{children}</h2>,
        h4: ({ children }) => <h4 className="mb-5">{children}</h4>,
        normal: ({ children }) => <p className="relative mb-4">{children}</p>,
    },
    marks: {
        // Gestion des liens
        link: ({ children, value }) => {
            const target = (value.href || '').startsWith('http') ? '_blank' : undefined;
            return (
                <a href={value.href} target={target} rel={target ? 'noopener noreferrer' : undefined} className="text-redCol hover:underline">
                    {children}
                </a>
            );
        },
    },
    list: {
        // Gestion des listes non ordonnées
        bullet: ({ children }) => <ul className="mb-4 ml-8 space-y-2 list-disc list-inside">{children}</ul>,
    },
    listItem: {
        bullet: ({ children }) => <li className="list-disc marker:text-redCol">{children}</li>,
    },
};

export default async function page({ params }) {
    const post = await getPost(params.slug) || {}

    const categories = post.categories.map(category => category.slug.current)

    return (
        <section className="bg-dark-gray">
            <div className="grid grid-cols-1 gap-8 px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 md:grid-cols-3 lg:gap-16">
                <article className='col-span-1 md:col-span-2'>
                    <div className="relative overflow-hidden rounded-lg">
                        <Image
                            src={post.coverImage}
                            fill
                            priority
                            sizes="(max-width: 768px) 100%, (max-width: 1200px) 100%"
                            className="!relative object-cover w-full"
                            alt={post.coverImageAlt}
                        />
                    </div>
                    <h1 className='mt-4 text-lg font-semibold'>{post.title}</h1>
                    <div className="flex items-center gap-4 mt-4 mb-8 text-sm text-white">
                        <span className="flex items-center gap-2 text-sm">
                            <FaUser />
                            {post.author}
                        </span>
                        <span className="flex items-center gap-2 text-sm">
                            <FaCalendar />
                            {format(new Date(post.publishedAt), 'MM-dd-yyyy')}
                        </span>
                    </div>
                    <div>
                        <PortableText value={post.body} components={components} onMissingComponent={false} />
                    </div>
                </article>
                <aside className='flex flex-col col-span-1 gap-8 '>
                    <div className='py-4 rounded-lg bg-dark'>
                        <h3 className='ml-4 text-lg'>Latest posts</h3>
                        <LatestPosts />
                    </div>
                    <div className='py-4 rounded-lg bg-dark'>
                        <h3 className='ml-4 text-lg'>Related posts</h3>
                        <RelatedPosts currentSlug={post.slug} currentPostCategories={categories} />
                    </div>
                </aside>
            </div>
        </section>

    )
}