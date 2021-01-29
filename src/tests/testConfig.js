import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import reducer from '../store/ducks/tools';

const getStore = (initialState) => {
  if (!initialState) return createStore(reducer, applyMiddleware(thunk));
  return createStore(reducer, initialState, applyMiddleware(thunk));
};

const renderWidthRouterAndRedux = (component, routeConfigs = {}, initialState) => {
  const route = routeConfigs.route || '/';
  const store = getStore(initialState);
  const history = routeConfigs.history || createMemoryHistory({ initialEntries: [route] });
  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>{ component }</Router>
      </Provider>
    ),
    history,
    store,
  };
};

export default renderWidthRouterAndRedux;
