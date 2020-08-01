import { FETCH_POSTS } from '../actions/types';

const initialState = {
  items: []
};

export default function(state=initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
