import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import tools from './tools/reducer';

const store = createStore(
  combineReducers({
    tools,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
