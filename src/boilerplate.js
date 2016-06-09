import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import reduxElm from 'redux-elm';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

export default (containerDomId, View, updater) => {
  const storeFactory = compose(
    reduxElm,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = storeFactory(updater);
  const history = syncHistoryWithStore(browserHistory, store);

  const ConnectedView = connect(appState => ({
    model: appState
  }))(View);

  render((
    <Provider store={store}>
      <ConnectedView history={history} />
    </Provider>
  ), document.getElementById(containerDomId));
}
