import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(
  process.env.GRAPH_CMS_ENDPOINT_URL
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

export const getSkills = async () => {
  const { skills } = await hygraph.request(
    `query Skills {
        skills (first: 50){
          id
          name
        }
      }`
  );

  return skills
}