import axios from "axios";

function getPages(pathname) {
  return axios({
    url: process.env.REACT_APP_URL + "/graphql",
    method: "post",
    data: {
      query: `{
          pages(filters: {Slug: {eq:"/"}}) {
            data {
              id
              attributes {
                Title
                Slug
                PageContent {
                  type:__typename
                  ... on ComponentPageHero {
                    LargeHeader
                    Title
                  }
                  ... on ComponentPageImageBlock{
                    imageText
                    imageBackground{
                      data{
                        attributes{
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
     }`,
    },
  });

  // return axios.get("http://192.168.2.30:1337/api/pages");
}

export default getPages;
