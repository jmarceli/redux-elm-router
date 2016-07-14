import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reduxElm from 'redux-elm';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import routerMiddleware from './utils/routerMiddleware';

export default (containerDomId) => {
  const storeFactory = compose(
    reduxElm,
    applyMiddleware(
      routerMiddleware(browserHistory)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  let store;

  return (View, updater) => {
    const reducers = combineReducers({
      root: updater,
      routing: routerReducer
    });

    if (!store) {
      store = storeFactory(reducers);
    } else {
      store.replaceReducer(reducers);
    }

    const history = syncHistoryWithStore(browserHistory, store);

    render((
      <Provider store={store}>
        <View
          history={history}
          dispatch={store.dispatch}
        />
      </Provider>
    ), document.getElementById(containerDomId));
  }
}
