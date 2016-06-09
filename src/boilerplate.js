import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import reduxElm from 'redux-elm';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

export default (containerDomId, View, updater) => {
  const storeFactory = compose(
    reduxElm,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = storeFactory(combineReducers({
    root: updater,
    routing: routerReducer
  }));
  const history = syncHistoryWithStore(browserHistory, store);

  const Component = () => (
    <Provider store={store}>
      <View
        history={history}
        dispatch={store.dispatch}
      />
    </Provider>
  );

  render(<Component />,
    document.getElementById(containerDomId));
}
