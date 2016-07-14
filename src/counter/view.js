import React from 'react';
import { push } from 'react-router-redux';
import { view, forwardTo } from 'redux-elm';

export default view(({ model, dispatch }) => (
  <div>
    <h1>{model.title}</h1>
    <button onClick={() => dispatch({ type: 'Increment' })}>Clicked {model.count} times</button>
    <br/>
    <button onClick={() => dispatch(push('/'))}>Go Home</button> it will take you home using push()
  </div>
));
