import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { DialogContent, DialogActions } from '@material-ui/core';
import Styles from './styles';
import Alarm from '../Alarm';

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

  addNewAlarm() {
    const { alarms, newAlarmTime } = this.state;

    return [...alarms, newAlarmTime];
  }

  displayAlarms() {
    const { alarms } = this.state;

    return alarms.map(alarm => (<Alarm key={Math.random()}>{alarm}</Alarm>));
  }

  render() {
    return (
      <div style={Styles.container}>
        <Typography variant="display4" color="primary">Alarm Clock</Typography>
        <div>
          {this.displayAlarms()}
        </div>
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
          <DialogContent>
            <TextField
              type="time"
              defaultValue={getCurrentTime()}
              onChange={event => this.setState({ newAlarmTime: event.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({ isAddAlarmDialogOpen: false })}>
              Cancel
            </Button>
            <Button onClick={() => this.setState({ isAddAlarmDialogOpen: false , alarms: this.addNewAlarm() })}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default App;
