import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Styles from './styles';

export default ({ children }) => {
    const [hour, minute] = children.split(':');
    
    let timeSuffix;

    if (hour >= 12) {
        timeSuffix = 'PM';
    } else {
        timeSuffix = 'AM';
    }

    const offsetHour = hour === '00' || hour === '12' ? '12' : `${parseInt(hour, 10) % 12}`;
    const twoDigitHour = offsetHour.length === 1 ? `0${offsetHour}` : offsetHour

    const time = `${twoDigitHour}:${minute} ${timeSuffix}`;

    return (
        <Paper style={Styles.container}>
            <Typography
                variant="display3"
                color="primary"
                align="center"
            >
                {time}
            </Typography>
        </Paper>
    );
}
