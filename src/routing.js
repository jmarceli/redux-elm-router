import React from 'react';
import { connect } from 'react-redux';
import { forwardTo } from 'redux-elm';
import { Router, Route, IndexRoute } from 'react-router';

import Counter from './counter/view';

const connectView = (View, modelKey, ...nesting) =>
  connect(appState => ({ model: appState.root[modelKey] }))(
    props => <View {...props} dispatch={forwardTo(props.dispatch, ...nesting)} />);

const ConnectedCounterView1 = connectView(Counter, 'counter1', 'Counter1');
const ConnectedCounterView2 = connectView(Counter, 'counter2', 'Counter2');

class Template extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default history => (
  <Router history={history}>
    <Route path="/" component={Template}>
      <IndexRoute component={ConnectedCounterView1} />
      <Route path="counter1" component={ConnectedCounterView1} />
      <Route path="counter2" component={ConnectedCounterView2} />
    </Route>
  </Router>
);
