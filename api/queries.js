import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function getSkills() {
  return client.fetch(
    groq`*[_type == "skill"]{
      _id,
      name
    }`
  )
}

export async function getServices() {
  return client.fetch(
    groq`*[_type == "service"][0...50]{
      _id,
      name,
      description,
      servicesList
    }`
  )
}

export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonial"]{
      _id,
      testimonialContent,
      client,
      "clientImageUrl": clientImage.asset->url,
      clientPosition,
      country
    }`
  )
}

export async function getAbout() {
  return client.fetch(
    groq`*[_type == "aboutPage"]{
      pageTitle,
      content[]{
        ...,
        _type == "block" => {
          "markdown": pt::text(content)
        }
      }
    }[0]`
  )
}

export async function getCertifications() {
  return client.fetch(
    groq`*[_type == "certification"]{
      _id,
      title,
      imageAltText,
      "imageUrl": image.asset->url
    }`
  )
}

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      "coverImageAlt": coverImage.alt,
      "author": author->name,
      categories[]->{
        title,
        slug
      },
      publishedAt
    }`
  );

}

export async function getPost(slug) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      "coverImageAlt": coverImage.alt,
      "author": author->name,
      categories[]->{
        title,
        slug
      },
      publishedAt,
      body[]{
        ...,
        asset->{
          url
        }
      }
    }`,
    { slug }
  );

}


export async function getLatestPosts() {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc)[0...3]{
      _id,
      title,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      "coverImageAlt": coverImage.alt,
      "author": author->name,
      categories[]->{
        title,
        slug
      },
      publishedAt
    }`
  );
}

export async function getRelatedPosts(slug, categorySlugs) {
  return client.fetch(
    groq`*[_type == "post" && slug.current != $slug && count(categories[]->slug.current in $categorySlugs) > 0] | order(publishedAt desc)[0...3]{
      _id,
      title,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      "coverImageAlt": coverImage.alt,
      "author": author->name,
      categories[]->{
        title,
        slug
      },
      publishedAt
    }`,
    { slug, categorySlugs }
  );
}




export async function getCategories() {
  return client.fetch(
    groq`

    `
  )
}