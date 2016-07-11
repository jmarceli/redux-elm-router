/**
 * Main template component. It is the place for defining general page structure like navbars etc.
 */
import React from 'react';
import { Link } from 'react-router'; // just for navigation
import { view, forwardTo } from 'redux-elm';

export default view(({ model, dispatch, children }) => (
  <div>
    <nav>
      <Link to="/one">counter1</Link>
      <br/>
      <Link to="/two">counter2</Link>
    </nav>
    <main>
      <div>
        <span>This is template updater button (it should have same value on each subpage):</span>
        <button onClick={() => dispatch({ type: 'Test' })}>Test {model.test}</button>
      </div>
      {children}
    </main>
  </div>
));
