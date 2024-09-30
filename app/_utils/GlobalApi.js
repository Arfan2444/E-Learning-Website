import { gql, request } from "graphql-request";
const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";

const getAllCourseList = async () => {
  const query = gql`
    query MyQuery {
      courseLists {
        author
        name
        id
        free
        description
        sourceCode
        chapter {
          ... on Chapter {
            id
            name
            video {
              id
              mimeType
              fileName
              url
            }
          }
        }
        chapter {
          ... on Chapter {
            id
            name
            youtubeUrl
          }
        }
        banner {
          url
          id
        }
        slug
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getSideBanner = async () => {
  const query = gql`
    query GetSideBanner {
      sideBanners {
        id
        name
        banner {
          id
          url
        }
        url
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getCourseById = async (courseId) => {
  const query =
    gql`
    query MyQuery {
      courseList(where: { slug: "` +
    courseId +
    `" }) {
        author
        chapter {
          ... on Chapter {
            id
            name
            chapterNumber
            youtubeUrl
          }
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              id
              mimeType
              fileName
              url
            }
          }
        }
        description
        free
        id
        name
        slug
        sourceCode
        tag
        totalChapters
        
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getAllCourseList,
  getSideBanner,
  getCourseById,
};
