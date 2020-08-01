import React from 'react';
import Posts from './components/Post';

import { Provider } from 'react-redux';
import store from "./store";
// import { createStore, applyMiddleware } from 'redux';
// const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
