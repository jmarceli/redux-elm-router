/**
 * Main template component. It is the place for defining general page structure like navbars etc.
 */
import React from 'react';
import { Link } from 'react-router'; // just for navigation

const Template = (props) => (
  <div>
    <nav>
      <Link to="/one">counter1</Link>
      <br/>
      <Link to="/two">counter2</Link>
    </nav>
    <main>
      {props.children}
    </main>
  </div>
);

Template.propTypes = {
  children: React.PropTypes.object,
};

export default Template;
