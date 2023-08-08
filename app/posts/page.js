

import { getCategories, getPosts } from '@/api/queries'
import Post from '@/components/Post'
import Categories from '@/components/Categories'
import React from 'react'

export default async function page({ searchParams: { category } }) {
    const condition = category === 'All' || !category ? { category: '' } : { category: category }
    const categories = await getCategories()
    const posts = await getPosts(condition)
    return (
        <section className="bg-dark-gray border-b-2 border-border py-0">
            <div className='bg-dark h-40 lg:h-96 flex items-center justify-center'>
                <div className='text-center max-w-7xl m-auto'>
                    <h1>Browse My Blog Archives</h1>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-16 lg:py-24">

                <Categories categories={categories} />
                <Post posts={posts} />
            </div>
        </section>
    )
}
