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

export async function getSkills() {
  const query = gql`
    query Skills {
      skills (first: 100){
        id
        name
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.skills
}