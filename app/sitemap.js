// import { getPosts } from "@/api/queries";

import { getCategories, getPostsForSitmap } from "@/api/queries";

export default async function sitemap() {
    const baseUrl = "https://www.abdoulhayyou.com";

    // // Get All Posts from CMS
    const posts = await getPostsForSitmap()
    const postsUrls = posts?.map(post => (
        {
            url: `${baseUrl}/posts/${post.slug}`,
            lastModified: new Date()
        }
    ))

    const categories = await getCategories()
    const categoriesUrls =
        categories?.map((category) => {
            return {
                url: `${baseUrl}/posts?category=${category.name}`,
                lastModified: new Date(),
            };
        }) ?? [];

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        ...postsUrls,
        ...categoriesUrls
    ];
}