import React, { Component } from 'react';
import classes from './App.css';

class App extends Component {
  state = {
    noState: '',
  };

  render() {
    return (
      <div className={classes.App}>
        <ol>
          <li className={classes.Red}>Test</li>
        </ol>
        <hr />
      </div>
    );
  }
}

export default App;
