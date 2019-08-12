import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import allReducers from './reducers/index';

const store = createStore();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//STORE -> globalized state

//ACTION -> description of what you wanna do - it's just a name
//action - simple function that returns an object

// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   };
// };
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   };
// };

//REDUCER -> describes how actions transform state
//reducer takes two arguments - initial state and action
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;

//     case 'DECREMENT':
//       return state - 1;
//   }
// };

// let store = createStore(counter);

//display in in the console
// store.subscribe(() => console.log(store.getState()));

//DISPATCH -> it's how we gonna execute action - send action to the reducer
// store.dispatch(decrement());
