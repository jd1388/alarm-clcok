import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Styles from './styles';

const getCurrentTime = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentTime = `${currentHour}:${currentMinute}`;

  return currentTime
    .split(':')
    .map(timeComponent => timeComponent.length === 1 ? `0${timeComponent}` : timeComponent)
    .join(':');
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      alarms: [],
      isAddAlarmDialogOpen: false,
      newAlarmTime: '',
    }
  }

  render() {
    return (
      <div style={Styles.container}>
        <Typography variant="display4" color="primary">Alarm Clock</Typography>
        <Button
          variant="fab"
          color="primary"
          onClick={() => this.setState({ isAddAlarmDialogOpen: true, newAlarmTime: getCurrentTime() })}
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
          <TextField type="time" defaultValue={getCurrentTime()}/>
        </Dialog>
      </div>
    );
  }
}

export default App;
