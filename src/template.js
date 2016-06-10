/**
 * Main template component. It is the place for defining general page structure.
 */
import React from 'react';
import { Link } from 'react-router'; // just for navigation

// TODO: maybe there is some better implementation 
// e.g. using stateless functional components
export default class Template extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/one">counter1</Link>
          <br/>
          <Link to="/two">counter2</Link>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
