import { FETCH_POSTS } from './types';

export function fetchPosts() {
  return function (dispatch) {
    console.log("fetching");
    fetch('jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(items => dispatch({
        type: FETCH_POSTS,
        payload: items
      }))
  }
}
