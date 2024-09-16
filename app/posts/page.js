import Post from '@/components/Post'
import React from 'react'

export const metadata = {
    title: `Illiassou's Blog - Tips and Insights from a Top Rated Freelancer Virtual Assistant`,
    description: `Welcome to Illiassou's blog, where you can find useful tips and insights on how to become a successful freelancer virtual assistant. `
}

export default async function page() {
    return (
        <section className="py-0 border-b-2 bg-dark-gray border-border">
            <div className='flex items-center justify-center h-40 bg-dark lg:h-96'>
                <div className='m-auto text-center max-w-7xl'>
                    <h1>Parcourir les archives de mon blog</h1>
                </div>
            </div>
            <div className="px-2 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                {/* <Categories categories={categories} /> */}
                <Post />
            </div>
        </section>
    )
}