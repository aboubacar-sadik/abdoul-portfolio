import { getPosts } from '@/api/queries'
import Post from '@/components/Post'
import React from 'react'

export default async function page() {
    const posts = await getPosts()
    // console.log(posts);
    return (
        <div>
            <Post posts={posts} />
        </div>
    )
}
