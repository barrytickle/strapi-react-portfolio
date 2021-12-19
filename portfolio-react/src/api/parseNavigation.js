import axios from "axios";

const parseNavigation = () => {
  return axios({
    url: process.env.REACT_APP_URL + "/graphql",
    method: "post",
    data: {
      query: `{
        navigation{
            data{
              attributes{
                position,
                menuItems{
                  __typename,
                  ... on ComponentNavigationMenuItem{
                    Name,
                    urls{
                      data{
                        attributes{
                          Slug
                        }
                      }
                    }
                    SubNavigation{
                      id,
                      ...on ComponentNavigationSubNav{
                        Name,
                        url{
                          data{
                            attributes{
                              Slug
                            }
                          }
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
};

export default parseNavigation;
