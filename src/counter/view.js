import React from 'react';
import { view, forwardTo } from 'redux-elm';
import { Link } from 'react-router';

export default view(({ model, dispatch }) => (
  <div>
    <h1>{model.title}</h1>
    <Link to="/counter1">counter1</Link>
    <br/>
    <Link to="/counter2">counter2</Link>
    <br/>
    <button onClick={() => dispatch({ type: 'Increment' })}>Clicked {model.count} times</button>
  </div>
));
