import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default ({ children }) => (
    <Paper>
        <Typography>
            {children} AM
        </Typography>
    </Paper>
);
