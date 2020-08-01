import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};

export const store = createStore(() => [], initialState, applyMiddleware(thunk));

export default store;
