import { GraphQLClient, request, gql } from 'graphql-request';


const graphqlAPI = process.env.NEXT_GRAPH_CMS_ENDPOINT_URL
const hygraph = new GraphQLClient(
  graphqlAPI
);


// const getSkills = async (params) => {
//     const { product } = await hygraph.request(
//       `query ProductPageQuery($slug: String!) {
//         product(where: { slug: $slug }) {
//           name
//           description
//           price
//         }
//       }`,
//       {
//         slug: params.slug,
//       }
//     );

//     return product
//   }

export const getSkills = async (params) => {
  const { skills } = await hygraph.request(
    `query Skills {
        skills (first: 100) {
          id
          name
        }
      }`
  );

  return skills
}

export async function getServices() {
  const query = gql`
    query Services  {
      services (first: 50) {
        id
        name
        description
        servicesList
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.services
}

export async function getTestimonials() {
  const query = gql`
    query Testimonials {
      testimonials {
        id
        testimonialContent
        client
        clientImage {
          url
        }
        clientPosition
        country
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.testimonials
}

export async function getAbout() {
  const query = gql`
    query About {
      aboutPages {
        pageTitle
        content {
          markdown
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.aboutPages[0]
}

export async function getCategories() {
  const query = gql`
    query Categories{
      postCategories{
        id
        name
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postCategories
}
export async function getPosts({ category }) {
  const query = gql`
    query Posts ($category: String){
      blogPosts(where: {AND: {categories_every: {name_contains: $category}}}) {
        id
        title
        slug
        publishedAt
        author {
          name
        }
        coverImage {
          url
        }
        imageAltText
      }
    }
  `;
  const result = await request(graphqlAPI, query, { category: category });
  return result.blogPosts
}

