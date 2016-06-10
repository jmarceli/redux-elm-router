import React from 'react';
import { connect } from 'react-redux';
import { forwardTo } from 'redux-elm';
import { Router, Route, IndexRoute } from 'react-router';

// import required components
import Counter from './counter/view';
import Template from './template';
import { Link } from 'react-router'; // just for Template component links

/**
 * Prepare component for router
 * @param {View} View - imported view component class/name
 * @param {string} modelKey - key used in root reducer inside src/root/updater.js
 * @param {string} ...nesting - action name/identifier for component
 */
const connectView = (View, modelKey, ...nesting) =>
  connect(appState => ({ model: appState.root[modelKey] }))(
    props => <View {...props} dispatch={forwardTo(props.dispatch, ...nesting)} />);

// Here all the pages (routed components) gets wrapped
const ConnectedCounterView1 = connectView(Counter, 'counter1', 'Counter1');
const ConnectedCounterView2 = connectView(Counter, 'counter2', 'Counter2');

// this will be used inside src/root/view.js
export default history => (
  <Router history={history}>
    <Route path="/" component={Template}>
      <IndexRoute component={ConnectedCounterView1} />
      <Route path="one" component={ConnectedCounterView1} />
      <Route path="two" component={ConnectedCounterView2} />
    </Route>
  </Router>
);
