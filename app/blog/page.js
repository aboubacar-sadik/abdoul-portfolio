import { getPosts } from '@/api/queries'
import Post from '@/components/Post'
import Categories from '@/components/Categories'
import React from 'react'

export default async function page() {
    const posts = await getPosts()
    // console.log(posts);
    return (
        <section className="bg-dark-gray border-b-2 border-border">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <Categories />
                <Post posts={posts} />
            </div>
        </section>
    )
}
