import React from 'react';
import { view, forwardTo } from 'redux-elm';

export default view(({ model, dispatch }) => (
  <div>
    <h1>{model.title}</h1>
    <button onClick={() => dispatch({ type: 'Increment' })}>Clicked {model.count} times</button>
  </div>
));
