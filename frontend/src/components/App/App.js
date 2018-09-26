import React, { Component } from 'react';
import Styles from './styles';

class App extends Component {
  constructor() {
    super();

    this.state = {
      alarms: []
    }
  }

  render() {
    return (
      <div style={Styles.container}>
        <h1>Alarm Clock</h1>
      </div>
    );
  }
}

export default App;
