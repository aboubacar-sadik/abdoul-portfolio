// import { getPosts } from "@/api/queries";

import { getPosts, getPostsForSitmap } from "@/api/queries";

export default async function sitemap() {
    const baseUrl = "https://www.abdoulhayyou.com";

    // // Get All Posts from CMS
    const posts = await getPosts({ category: 'All' })
    const postsUrls = posts?.map(post => (
        {
            url: `${baseUrl}/posts/${post.slug}`,
            lastModified: new Date()
        }
    ))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        ...postsUrls,
    ];
}