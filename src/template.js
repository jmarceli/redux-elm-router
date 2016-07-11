/**
 * Main template component. It is the place for defining general page structure like navbars etc.
 */
import React from 'react';
import { Link } from 'react-router'; // just for navigation
import { view, forwardTo } from 'redux-elm';

export default view(({ children, dispatch }) => (
  <div>
    <nav>
      <button onClick={() => dispatch({ type: 'Test' })}>Test</button>
      <Link to="/one">counter1</Link>
      <br/>
      <Link to="/two">counter2</Link>
    </nav>
    <main>
      {children}
    </main>
  </div>
));
