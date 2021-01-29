import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import tools from './ducks/tools';

const store = createStore(
  combineReducers({
    tools,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
