import { FETCH_POSTS } from './types';

export function fetchPosts() {
  return function (dispatch) {
    console.log("reducing");
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(items => dispatch({
        type: FETCH_POSTS,
        payload: items
      }))
  }
}
