import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Styles from './styles';

class App extends Component {
  constructor() {
    super();

    this.state = {
      alarms: [],
      isAddAlarmDialogOpen: false,
    }
  }

  render() {
    return (
      <div style={Styles.container}>
        <Typography variant="display4" color="primary">Alarm Clock</Typography>
        <Button
          variant="fab"
          color="primary"
          onClick={() => this.setState({ isAddAlarmDialogOpen: true })}
          style={Styles.fab}
        >
          <SvgIcon>
            <AddIcon/>
          </SvgIcon>
        </Button>
        <Dialog open={this.state.isAddAlarmDialogOpen} onClose={() => this.setState({ isAddAlarmDialogOpen: false })}>
          <DialogTitle>
            Add Alarm
          </DialogTitle>
        </Dialog>
      </div>
    );
  }
}

export default App;
