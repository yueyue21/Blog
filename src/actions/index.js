import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";
export const fetchPosts = () => async dispatch => {
  // this request takes some time
  // return a function
  const response = await jsonPlaceholder.get("/posts");
  // instead of return an object we can dispatch that object
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// export const fetchUser = id => async dispatch => {
//   // `/users/${id}`
//   const response = await jsonPlaceholder.get("/users/" + id);
//   dispatch({ type: "FETCH_USER", payload: response.data });
//   //console.log(id);
// };

//memoize version. (fetch each user with same userId only once)
export const fetchUser = function(id) {
  return function(dispatch) {
    return _fetchUser(id, dispatch);
  };
};
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
