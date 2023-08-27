export default async function sitemap() {
    const baseUrl = "https://www.abdoulhayyou.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
    ];
}