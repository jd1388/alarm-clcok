import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import AddIcon from '@material-ui/icons/Add';
import Styles from './styles';

class App extends Component {
  constructor() {
    super();
``
    this.state = {
      alarms: []
    }
  }

  render() {
    return (
      <div style={Styles.container}>
        <Typography variant="display4">Alarm Clock</Typography>
        <Button variant="fab" color="primary" style={Styles.fab}>
          <SvgIcon>
            <AddIcon/>
          </SvgIcon>
        </Button>
      </div>
    );
  }
}

export default App;
