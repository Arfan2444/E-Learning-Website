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

const enrollToCourse = async (courseId, email) => {
  const query =
    gql`
    mutation MyMutation {
      createUserEnrollCourse(
        data: {
          courseId: "` +
    courseId +
    `"
          userEmail: "` +
    email +
    `"
          courseList: { connect: { slug: "` +
    courseId +
    `" }}}
      ) {
        id
      }
      publishManyUserEnrollCoursesConnection{
        edges {
          node {
            id
          }
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const checkUserEnrolledToCourse = async (courseId, email) => {
  const query =
    gql`query MyQuery {
  userEnrollCourses(where: {courseId: "` +
    courseId +
    `", userEmail: "` +
    email +
    `"}) 
  {
    id
  }
}
`;
  const result = await request(MASTER_URL, query);
  return result;
};

const getUserEnrolledCourseDetails = async (id, email) => {
  const query =
    gql`
    query MyQuery {
      userEnrollCourses(where: { id: "` +
    id +
    `", userEmail: "` +
    email +
    `" }) {
        courseId
        id
        userEmail
         completedChapter {
      ... on CompletedChapter {
        id
        chapterId
      }
    }
        courseList {
          author
          banner {
            url
          }
          chapter {
            ... on Chapter {
              id
              name
              shortDesc
              video {
                url
              }
            }
          }
          demoUrl
          description
          free
          id
          name
          slug
          sourceCode
          totalChapters
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const MarkCompletedChapter = async (enrollId, chapterId) => {
  const query =
    gql`
    mutation MyMutation {
      updateUserEnrollCourse(
        where: { id: "` +
    enrollId +
    `" }
        data: {
          completedChapter: {
            create: { CompletedChapter: { data: { chapterId: "` +
    chapterId +
    `" } } }
          }
        }
      ){
       id 
      }
      publishUserEnrollCourse(where: { id: "` +
    enrollId +
    `" }) {
        id
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
}

const getUserAllEnrolledCourseList=async(email)=>{
  const query =gql`
  query MyQuery {
  userEnrollCourses(where: {userEmail: "`+email+`"}) {
    completedChapter {
      ... on CompletedChapter {
        id
        chapterId
      }
    }
    courseId
    courseList {
      id
      name
      totalChapters
      slug
      sourceCode
      free
      demoUrl
      description
      chapter {
        ... on Chapter {
          id
          name
        }
      }
      author
      banner {
        url
      }
    }
  }
}
  `
const result = await request(MASTER_URL, query);
return result;
}


export default {
  getAllCourseList,
  getSideBanner,
  getCourseById,
  enrollToCourse,
  checkUserEnrolledToCourse,
  getUserEnrolledCourseDetails,
  MarkCompletedChapter,
  getUserAllEnrolledCourseList
};
